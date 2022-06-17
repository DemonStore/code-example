import { GalleryItem } from 'components/Gallery'

const collection1: GalleryItem[] = [
  {
    image: '1.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    image: '2.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    image: '3.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    image: '4.jpg',
    title: 'Lorem ipsum dolor sit amet'
  },
  {
    image: '8.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    renderContent: () => (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur earum expedita facilis labore molestiae non officia reiciendis rem repellendus. Assumenda blanditiis iste nemo quasi. Amet animi asperiores consequatur distinctio dolore eius enim est fuga fugit illo ipsa perspiciatis, quam?
      </>
    )
  },
  {
    image: '5.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    renderContent: () => (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </>
    )
  },
  {
    image: '7.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    renderContent: () => (
      <>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis.
      </>
    )
  },
  {
    image: '6.jpg',
    title: 'Lorem ipsum dolor sit amet, consectetur'
  }
]

export default collection1
