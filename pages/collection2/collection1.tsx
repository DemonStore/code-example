import Layout from 'components/Layout'
import PageHeading from 'components/PageHeading'
import PostImage, { ImageDimensions } from 'components/PostImage'
import { useActualLinkName } from 'lib'

import styles from './collection1.module.scss'

const verticalDimensions: ImageDimensions = {
  width: 540,
  height: 810
}

const Collection1 = () => {
  const title = useActualLinkName()
  return (
    <Layout title={title}>
      <div className={styles.base}>
        <PageHeading>{title}</PageHeading>
        <p>
          <strong>Lorem ipsum.</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi ea esse est natus nisi qui quis tempore! Fugit, sint!
        </p>
        <div className="row">
          <div className="col-md-4">
            <PostImage
              src="/images/collection2/collection1/28.jpg"
              alt="Lorem ipsum dolor"
            />
          </div>
          <div className="col-md-4">
            <PostImage src="/images/collection2/collection1/84.jpg" alt="Lorem ipsum dolor" />
          </div>
          <div className="col-md-4">
            <PostImage src="/images/collection2/collection1/11.jpg" alt="Lorem ipsum dolor" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta doloremque dolores ea enim, error ipsa libero magnam nulla numquam praesentium quo ratione similique soluta tempore unde velit veniam voluptate.
        </p>
        <p>
          <em>Lorem ipsum dolor sit amet, consectetur.</em>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius error magni omnis suscipit? Corporis dolor eligendi officia rerum similique? Adipisci aliquam aliquid aspernatur, cum doloribus ea enim facilis fugiat inventore ipsum iure, iusto libero non perferendis porro quasi recusandae reiciendis rem tenetur vel! Animi inventore minima, non quaerat reprehenderit repudiandae.
        </p>
        <div className="row">
          <div className="col-md-6">
            <PostImage
              src="/images/collection2/collection1/16.jpg"
              alt="Lorem ipsum dolor"
            />
          </div>
          <div className="col-md-6">
            <PostImage src="/images/collection2/collection1/18.jpg" alt="Lorem ipsum dolor" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur blanditiis consectetur cupiditate illo ipsam minus nihil, non tenetur voluptate?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rem, soluta? Aliquam aspernatur beatae corporis culpa, dignissimos dolor dolores excepturi exercitationem fugit ipsum iure labore maxime minima molestiae nisi perferendis perspiciatis quasi quia quo, ratione sed, sequi sint sit! Dolorum.
        </p>
        <h5>Lorem ipsum.</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio explicabo fugit libero possimus quod reprehenderit voluptatem! Aperiam natus qui veniam.
        </p>
        <div className="row">
          <div className="col-md-6">
            <PostImage src="/images/collection2/collection1/61.jpg" alt="Lorem ipsum dolor" />
          </div>
          <div className="col-md-6">
            <PostImage
              src="/images/collection2/collection1/34.jpg"
              alt="Lorem ipsum dolor"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid assumenda eveniet facere in molestiae obcaecati, odio officia praesentium quaerat, quasi quia quisquam quod repudiandae, temporibus voluptas voluptatem voluptates. Amet aspernatur eligendi molestias nisi quas ratione rerum sed vero voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem, cumque eaque minus molestias non possimus quaerat quisquam repellat sint! Incidunt ipsum, quasi. Assumenda consequatur doloribus ducimus, enim, error facilis fuga maxime nesciunt nulla odio quis sit tempora temporibus tenetur totam ullam ut vero vitae? Delectus dolore nihil quae vitae.
        </p>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cumque doloribus fuga incidunt nisi officiis praesentium vitae, voluptates. Blanditiis cupiditate dolore, dolorum enim fuga id incidunt molestiae nam repellendus voluptates.
        </p>

        <div className="row">
          <div className="col-md-6">
            <PostImage
              src="/images/collection2/collection1/338.jpg"
              alt="Lorem ipsum dolor"
              caption="Lorem ipsum dolor"
              captionSmall="Lorem ipsum dolor"
            />
          </div>
          <div className="col-md-6">
            <PostImage
              src="/images/collection2/collection1/55.jpg"
              alt="Lorem ipsum dolor"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti enim fugiat illum magnam molestias nam perspiciatis rerum similique sunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid aspernatur assumenda, explicabo fugiat nulla obcaecati quis temporibus tenetur unde?
        </p>
        <h5>Lorem ipsum dolor sit amet.</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi assumenda beatae dicta dolor dolores esse ex, explicabo facere fuga inventore ipsa molestiae nemo neque nihil odit officia omnis, optio perspiciatis quam quidem quod recusandae, rerum unde veniam voluptate!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis esse explicabo nisi odit possimus repellat reprehenderit sed tempora tenetur velit? Adipisci, at, dicta distinctio dolorum ex facere labore libero minima mollitia nam natus necessitatibus possimus quis similique velit. Minima, placeat voluptatum! Aperiam et, molestias mollitia perferendis quae quisquam tenetur voluptate.
        </p>
        <div className="row">
          <div className="col-md-6">
            <PostImage src="/images/collection2/collection1/44.jpg" />
          </div>
          <div className="col-md-6">
            <PostImage src="/images/collection2/collection1/45.jpg" alt="Lorem ipsum dolor" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto aspernatur deserunt ducimus et expedita id iste provident quidem voluptates?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda at consectetur cumque dolor dolores exercitationem ipsa magni maiores maxime natus neque non, perferendis quasi qui sed tenetur vel voluptatibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium autem corporis exercitationem explicabo fugiat ipsa ipsum, laudantium magni neque nisi odit officiis omnis provident repudiandae sed sequi ullam vitae.
        </p>
        <div className="row">
          <div className="col-md-4">
            <PostImage src="/images/collection2/collection1/65.jpg" />
          </div>
          <div className="col-md-4">
            <PostImage
              src="/images/collection2/collection1/77.jpg"
              alt="Lorem ipsum dolor"
            />
          </div>
          <div className="col-md-4">
            <PostImage src="/images/collection2/collection1/79.jpg" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta eaque laudantium maiores natus odit saepe tenetur ullam. Atque deserunt doloremque facilis perspiciatis ullam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur debitis enim illo laboriosam libero necessitatibus, odit provident rem repudiandae.
        </p>
        <div className="row">
          <div className="col-md-4">
            <PostImage
              {...verticalDimensions}
              src="/images/collection2/collection1/68.jpg"
              alt="Lorem ipsum dolor"
              caption="Lorem ipsum dolor"
              captionSmall="Lorem ipsum dolor sit amet"
            />
          </div>
          <div className="col-md-4">
            <PostImage
              {...verticalDimensions}
              src="/images/collection2/collection1/73.jpg"
              alt="Lorem ipsum dolor"
              caption="Lorem ipsum dolor"
              captionSmall="Lorem ipsum dolor"
            />
          </div>
          <div className="col-md-4">
            <PostImage
              {...verticalDimensions}
              src="/images/collection2/collection1/76.jpg"
              alt="Lorem ipsum dolor"
              caption="Lorem ipsum dolor"
              captionSmall="Lorem ipsum dolor"
            />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolore molestiae mollitia nam quae similique unde. Ad aperiam, at, culpa ea eius excepturi iure obcaecati quae quam, quasi sunt voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda, autem distinctio eius, excepturi exercitationem fugit maiores natus necessitatibus nostrum odio placeat praesentium quam quia quo rem sint soluta totam ut voluptas! Aperiam dicta dolores magnam, molestiae natus quam quod.
        </p>
        <div className="row">
          <div className="col-md-6">
            <PostImage src="/images/collection2/collection1/86.jpg" />
          </div>
          <div className="col-md-6">
            <PostImage src="/images/collection2/collection1/82.jpg" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequuntur dolore illo modi, nihil obcaecati officiis quis rerum saepe voluptatum!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa eligendi in magnam quas quia sint, totam! Adipisci dignissimos eos facere illum placeat praesentium tempora voluptates.
        </p>
      </div>
    </Layout>
  )
}

export default Collection1
