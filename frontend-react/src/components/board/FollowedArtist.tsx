import Details from '@/components/common/details/Details'
import Image from '@/components/common/image/Image'
import Typography from '@/components/common/typography/Typography'
import DEFAULT_PROFILE_IMAGE from '@/assets/img/ic-profile-40.svg'
import MORE_IMAGE from '@/assets/icons/common/plus_icon.svg'

export default function FollowedArtist() {
  return (
    <Details>
      <Details.Summary>
        <Typography variant="sub1" fontColor="gray1">
          팔로우한 아티스트
        </Typography>
      </Details.Summary>
      <Details.Contents>
        <ul className="artist-list">
          {[...new Array(5)].map((artist, i) => {
            return (
              <li key={i} className="followed-artists__artist">
                <Image
                  className="followed-artists__artist"
                  src={
                    i % 2 === 0
                      ? artist?.image
                      : 'https://picsum.photos/300/300'
                  }
                  alt={artist?.name}
                  fallbackkImageSrc={DEFAULT_PROFILE_IMAGE}
                />
                <Typography
                  variant="body2"
                  fontWeight="regular"
                  fontColor="gray2"
                >
                  {artist?.name}asdasfqwefweklfj
                </Typography>
              </li>
            )
          })}
          <li>
            <span className="more-button">
              <img src={MORE_IMAGE} alt="" />
            </span>
            <Typography variant="body2" fontWeight="regular" fontColor="gray2">
              MORE
            </Typography>
          </li>
        </ul>
      </Details.Contents>
    </Details>
  )
}
