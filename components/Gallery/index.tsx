import { memo, ReactNode, useState, useCallback } from 'react'
import { Col, Row } from 'react-bootstrap'

import GalleryImage from './GalleryImage'
import GalleryModal from './GalleryModal'

export type GalleryItem = {
  image: string
  title?: string
  renderContent?: () => ReactNode
}

export type Props = Readonly<{
  items: GalleryItem[]
  urlPrefix: string
}>

const Gallery = ({ items, urlPrefix }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const clickHandler = useCallback((item: GalleryItem) => {
    setShowModal(true)
    setSelectedItem(item)
  }, [])
  const closeHandler = useCallback(() => {
    setShowModal(false)
    setSelectedItem(null)
  }, [])

  return (
    <>
      <Row>
        {items.map((item, index) => (
          <Col key={index} md={6} lg={4} xl={3}>
            <GalleryImage urlPrefix={urlPrefix} item={item} onClick={() => clickHandler(item)} />
          </Col>
        ))}
      </Row>
      {showModal && (
        <GalleryModal
          urlPrefix={urlPrefix}
          item={selectedItem}
          onHide={closeHandler}
        />
      )}
    </>
  )
}

export default memo(Gallery)
