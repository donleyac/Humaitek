import React from 'react';
import DocumentMeta from 'react-document-meta';
import './styles.scss';


export default function(props) {
  const meta = {
    title: 'Zuzu Cuisine - Humaitek',
    description: 'Zuzu Cuisine is a food service company the specializes in fresh Mediterranean food.',
    canonical:'http://humaitek.com/#/zuzu',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'web, development, design, react, studio, dmv, dc, javascript, html, css'
      }
    }
  };
  return (
    <div className="article">
      <DocumentMeta {...meta} />
      <div className="overview">
        <div className="involvement">
          Involvement:
          <span>Design - Full </span>
          <span>Development - Full </span>
          <a className="website-url" href="http://www.zuzucuisine.com/#/">View Client Website</a>
        </div>

      </div>
      <p>
        Zuzu Cuisine sources their ingredients from fresh local producers.
        They create everything from scratch and combine tasty refreshing
        recipes with hot food from their moveable barbeque and bread baker.
        Their food is their focus and that’s what we made the centerpiece of
        the website. A large plate of their most popular dish takes up the
        whole view when the user comes to the page. This will be the first
        thing a customer sees when coming to the site and so we wanted to
        use the highest quality images and keep the rest of the page clean
        as to not distract from the image. Since the image is large we
        provide a button that when pressed will take you to the content below.
        We simply provide a colorful space for the client to express their vision in words.
      </p>
      <img src={require('./assets/zuzu/homepage.png')} />
      <p>
        The menu is the last hurdle between a customer and their wallet.
        At the top we have a textured banner with contact information and links social
        media. Since Zuzu provides food primarily through mobile methods, their contact
        sources need to be obvious.
      </p>
      <img src={require('./assets/zuzu/menu.png')} />
      <p>
        There are three categories for the products they provide. When you scroll a
        certain amount it becomes a sub-menu. When you are in a section that will
        highlight blue. The other available sections would be green. If you click
        the green link it will scroll to that specific category on the page. As for
        the menu items in those sections we have a clear image of the food item, its
        name, the contents, and price. The menu gives the food a center stage and
        provides all the information a customer would need in a concise way.
      </p>
      <img src={require('./assets/zuzu/menu_items.png')} />
  </div>
  )
}
