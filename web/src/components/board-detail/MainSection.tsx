import TagChip from '../board/TagChip'
import Button from '../common/button/Button'
import Image from '../common/image/Image'
import Typography from '../common/typography/Typography'
import styles from './MainSection.module.scss'

export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <article className={styles.mainInfo}>
        <div className="flex flex-col gap-16">
          <Image
            className={styles.mainImage}
            src="https://picsum.photos/400/400"
            alt="main item image"
          />

          <ul className="flex gap-8">
            {[...new Array(3)].map((v, i) => {
              return <Image key={i} className={styles.imageItem} alt={`${i}`} />
            })}
          </ul>
        </div>
        <span className={styles.info}>
          <Typography variant="h2" fontColor="gray1" fontWeight="bold">
            제목
          </Typography>
          <Typography
            className="mt-12 mb-24"
            variant="body1"
            fontColor="gray2"
            fontWeight="medium"
          >
            조회수 56회
          </Typography>
          <div className="flex gap-12 items-center">
            <Typography variant="h2" fontColor="primary" fontWeight="semibold">
              50,000
            </Typography>
            <Typography
              variant="sub2"
              fontColor="gray3"
              fontWeight="medium"
              className={styles.stroke}
            >
              100,000
            </Typography>
          </div>
          <hr className="mt-12 mb-24" />
          <ul className="flex flex-col gap-10">
            {[...new Array(3)].map((v, i) => {
              return (
                <div className="flex gap-16 items-center" key={i + 3}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    fontColor="gray3"
                  >
                    제목
                  </Typography>
                  <Typography
                    variant="sub2"
                    fontWeight="regular"
                    fontColor="gray1"
                  >
                    제목
                  </Typography>
                </div>
              )
            })}
          </ul>

          <hr className="mt-14 mb-16" />
          <Typography fontColor="gray1" variant="sub2">
            매우긴문장매우긴문장매우긴문장매우긴매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장매우긴문장
          </Typography>
          <ul className="flex gap-12 mt-24 mb-60">
            {[...new Array(3)].map((v, i) => {
              return (
                <TagChip size="lg" key={i}>
                  {i}
                </TagChip>
              )
            })}
          </ul>
          <hr />
          <div className="flex gap-22 my-24 items-center">
            <Image
              className={styles.artistImage}
              alt="artist profile thubnail"
            />
            <span className="flex-col gap-1 flex-1">
              <Typography variant="sub2" fontWeight="medium" fontColor="gray1">
                아티스트이름
              </Typography>
              <Typography variant="body1" fontColor="gray1">
                팔로워 123만명
              </Typography>
            </span>
            <Button className={styles.followButton} variant="gray">
              팔로우
            </Button>
          </div>
          <hr />
        </span>
      </article>
    </section>
  )
}
