import { useInfiniteQuery } from 'react-query'
import { ins } from '@/lib/axios'
import { plainToClass, Type } from 'class-transformer'
import 'reflect-metadata'
import { useMemo } from 'react'

export class DottoPost {
  postNo: number
  title: string
  id: string
  price: string
  salesPrice: string
  salesYn: string
  salesPct: string
  tags: string
  originName: string

  getTags() {
    return this.tags.split(',')
  }

  getPrice() {
    return parseInt(this.price).toLocaleString()
  }

  getSalesPrice() {
    return parseInt(this.salesPrice).toLocaleString()
  }

  isSales() {
    return this.salesYn === 'Y'
  }
}

export class Data {
  totalElement: number
  totalPage: number
  hasNext: boolean
  @Type(() => DottoPost)
  dottoPostDtoList: DottoPost[]
}

export class Result {
  @Type(() => Data)
  data: Data
}

export class Meta {
  success: boolean
  code: number
  @Type(() => Result)
  result: Result
}

type PageParams = {
  page: number
  size?: number
}

const getPosts = async (params: PageParams) => {
  const { data } = await ins.get<Meta>('/dottopost', {
    params: { ...params },
  })

  const root = plainToClass(Meta, data)

  return {
    data: root.result.data,
    nextPage: params.page + 1,
    prevPage: params.page - 1,
  }
}

export const useInfinitePosts = ({ size = 8 }: Pick<PageParams, 'size'>) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['posts', size],
    queryFn: ({ pageParam = 1 }) => getPosts({ page: pageParam, size }),
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNext ? lastPage.nextPage : undefined,
    getPreviousPageParam: (firstPage) =>
      firstPage.prevPage === 0 ? undefined : firstPage.prevPage,
  })

  const resultPostList = useMemo(() => {
    if (data == null) return []
    return data.pages.map((page) => page.data.dottoPostDtoList.flat()).flat()
  }, [data])

  return { data: resultPostList, ...rest }
}
