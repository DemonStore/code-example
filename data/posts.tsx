import { Col, Row } from 'react-bootstrap'

import PostImage from 'components/PostImage'
import { PostData } from 'components/Post'

const posts: PostData[] = [
  {
    url: 'title1',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    date: new Date('2017-06-21T19:28:00+03:00'),
    keywords: 'Lorem ipsum dolor sit amet, consectetur',
    renderShortContent: () => (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, minus.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, delectus eligendi facilis molestiae molestias necessitatibus. Animi, assumenda beatae consectetur, consequatur corporis culpa dolore dolorem magnam non quasi quidem quis recusandae, repudiandae rerum tenetur. Adipisci amet at delectus eligendi eos ipsam magnam nam nemo, nihil officia omnis perferendis provident quae quis soluta ullam veritatis? Ab dicta est neque, quia velit voluptate.
        </p>
      </>
    ),
    renderContent: () => (
      <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequatur consequuntur cupiditate delectus, distinctio dolores ea error, et eum fuga incidunt itaque laborum magnam minus neque nihil nisi nulla omnis perspiciatis quis saepe, similique sint tempora totam unde voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquam amet architecto assumenda aut consequuntur distinctio eos error ex explicabo fugit incidunt minus modi nam, neque nesciunt omnis, quia quisquam ratione saepe sed sint vel veniam voluptatum? Iure, nobis!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda consectetur cum distinctio dolore, ipsa magnam modi nam neque nesciunt odio quaerat tempore veritatis? Hic in labore nemo nisi nulla qui quod temporibus. Eaque explicabo iusto minima mollitia quod repudiandae?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis deleniti, error, facilis id illo nesciunt non porro provident quidem, quod saepe? Debitis labore modi repellat sequi velit. Dolorum, similique.
        </p>
        <div className="h5">Lorem ipsum dolor sit amet, consectetur</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste laboriosam minus pariatur perspiciatis reiciendis. Accusamus atque consequuntur cum distinctio, ea, eligendi iure molestias mollitia perferendis quibusdam similique unde velit voluptatum?
        </p>
        <Row>
          <Col md={6}>
            <PostImage
              src="/images/blog/title1/16586901.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
          <Col md={6}>
            <PostImage
              src="/images/blog/title1/14208913.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam aut error hic ipsum iste laboriosam libero magnam, magni porro, quaerat repellendus reprehenderit, repudiandae suscipit unde. Atque officia vitae voluptatum.
        </p>
        <Row>
          <Col md={6}>
            <PostImage
              src="/images/blog/title1/58757652.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>

          <Col md={6}>
            <PostImage
              src="/images/blog/title1/90079968.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
        </Row>
      </>
    )
  },
  {
    url: 'title2',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    date: new Date('2016-09-18T22:32:00+03:00'),
    keywords: 'Lorem ipsum dolor sit amet, consectetur',
    renderShortContent: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci atque blanditiis consequuntur deserunt eligendi exercitationem fuga iure minus molestiae nisi non nostrum obcaecati provident quas soluta tenetur ullam voluptas?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, atque beatae blanditiis corporis culpa cumque dolor eaque esse eum exercitationem facilis laudantium minus nam nisi non nostrum officia officiis perferendis perspiciatis quisquam rerum similique sint suscipit tempora unde ut veritatis.
        </p>
      </>
    ),
    renderContent: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid ducimus expedita facere facilis incidunt laborum libero omnis ratione rerum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus animi consequatur deleniti ducimus eaque exercitationem hic in maiores, modi nulla provident quas reprehenderit temporibus veritatis. Excepturi explicabo rem velit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quasi!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet consequuntur cupiditate, facilis quis saepe.
        </p>
        <PostImage
          src="/images/blog/title2/01511327.jpg"
          alt='Lorem ipsum dolor sit amet, consectetur'
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi culpa cupiditate earum est excepturi facilis quibusdam repellat sed voluptas! Accusamus, doloremque explicabo minima modi neque nobis rem temporibus. Animi beatae error eum praesentium quisquam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eius eos fuga harum ipsa necessitatibus similique suscipit tempora tempore veritatis?
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, impedit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque libero maiores suscipit tempore?
        </p>
        <PostImage
          src="/images/blog/title2/20273845.jpg"
          alt="Lorem ipsum dolor"
          autoWidth
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque dolor ipsum, iure maxime odit!
        </p>
      </>
    )
  },
  {
    url: 'title3',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    date: new Date('2016-09-11T00:28:00+03:00'),
    keywords: 'Lorem ipsum dolor sit amet, consectetur',
    renderShortContent: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cum cupiditate debitis eaque esse eveniet, facere magni officia optio sapiente? Dolore esse eum facere maxime odit sapiente totam vel veniam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque, deserunt ducimus eius error et eveniet exercitationem facere fugiat, ipsum labore magnam nam nemo pariatur perferendis quas quasi quidem sequi, totam ullam ut voluptatem voluptates! A accusantium eligendi exercitationem molestiae odit perspiciatis quo sint sit voluptas voluptatibus. Consectetur, labore, veritatis?
        </p>
      </>
    ),
    renderContent: () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quia veritatis vero? Iure non, voluptas. Ab, debitis eveniet hic in laboriosam laborum maxime minima, nobis non, placeat quasi sit veniam!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid assumenda beatae consequatur debitis dolore exercitationem facilis hic illum nesciunt nihil nobis perspiciatis quod quos rem, repellat, repellendus saepe sit veniam voluptate. Ad animi beatae consequatur, eaque, eos et iste itaque iure magni nobis sit unde velit vitae voluptate voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eius eligendi, eum facere illo magnam modi optio quis temporibus voluptatibus. Animi autem consequuntur dicta ducimus explicabo illo maxime nemo officiis quas, qui ratione, reiciendis rerum temporibus tenetur totam ut vitae.
        </p>
        <PostImage
          src="/images/blog/title3/24333495.jpg"
          autoWidth
          alt="Lorem ipsum dolor"
        />
      </>
    )
  },
  {
    url: 'title4',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    date: new Date('2016-09-10T16:30:00+03:00'),
    keywords: 'Lorem ipsum dolor sit amet, consectetur',
    renderContent: () => (
      <>
        <Row className="row">
          <Col md={4}>
            <PostImage
              src="/images/blog/title4/20990206.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
          <Col md={4}>
            <PostImage
              src="/images/blog/title4/42680958.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
          <Col md={4}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores, aspernatur, dicta dolorum eius hic impedit in ipsum nobis non officiis possimus praesentium quaerat quia sapiente, sequi similique sit.
            </p>
          </Col>
        </Row>
      </>
    )
  },
  {
    url: 'title5',
    name: 'Lorem ipsum dolor sit amet, consectetur',
    date: new Date('2016-09-06T22:53:00+03:00'),
    keywords: 'Lorem ipsum dolor sit amet, consectetur',
    renderContent: () => (
      <>
        <Row>
          <Col md={6}>
            <PostImage
              src="/images/blog/title5/74289887.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
          <Col md={6}>
            <PostImage
              src="/images/blog/title5/33272532.jpg"
              alt="Lorem ipsum dolor"
            />
          </Col>
        </Row>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quas?</p>
      </>
    )
  },
]

export default posts
