/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'

const HomePage = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null);
  }

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <p style={{ margin: '7rem 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae Netflix_Logo

        Home
        Movies
        TV Shows
        My List

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repellat exercitationem soluta aut commodi non deleniti tenetur quam iste voluptatibus? Soluta maxime sint, consectetur tempora aut obcaecati aliquid sed provident, iusto consequuntur accusamus consequatur voluptatem numquam expedita, repudiandae debitis nemo laudantium ex est rem. Quidem rerum officia reprehenderit iure assumenda quis culpa, sint animi voluptatum fuga voluptas minima repellendus quam tempora placeat? A in tempora qui reprehenderit eos aspernatur explicabo sequi voluptatum omnis perferendis recusandae odio modi blanditiis quibusdam, deleniti quidem ex delectus nam earum tempore, repellat, distinctio eligendi sed! At ullam recusandae</p>
    </>
  )
}

export default HomePage
