import { Col, ColProps, Row } from 'react-bootstrap'

import Banner from './Banner'

export type BannerItem = {
  image?: string
  name: string
  href?: string
  description?: string
}

export type Props = ColProps &
  Readonly<{
    banners: BannerItem[]
    imgMixClass?: string
  }>

const Banners = ({ banners, imgMixClass, ...colProps }: Props) => {
  return (
    <Row>
      {banners.map((banner, index) => (
        <Col key={index} {...colProps}>
          <Banner banner={banner} imgMixClass={imgMixClass} />
        </Col>
      ))}
    </Row>
  )
}

export default Banners
