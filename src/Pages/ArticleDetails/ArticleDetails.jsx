import React from 'react'
import MainLayout from '../../Components/MainLayout'
import BreadCrumbs from '../../Components/BreadCrumbs'
import { images } from '../../Constants'
import { Link } from 'react-router-dom'
import SuggestedPost from './container/SuggestedPost'
import CommentsContainer from '../../Components/Comments/CommentsContainer'

const breadCrumbsData = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Blog",
    link: "/blog"
  },
  {
    name: "Article Title",
    link: "/blog/1"
  }
];

const postData = [
  {
    id:"1",
    image: images.Post1Image,
    title:"Help children get better education",
    createdAt: ""
  },
  {
    id:"2",
    image: images.Post1Image,
    title:"Help children get better education",
    createdAt: ""
  },
  {
    id:"3",
    image: images.Post1Image,
    title:"Help children get better education",
    createdAt: ""
  },
  {
    id:"4",
    image: images.Post1Image,
    title:"Help children get better education",
    createdAt: ""
  },
];

const tagsData =[
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education"
];

const ArticleDetails = () => {
  return (
    <MainLayout >
        <section className='container flex flex-col max-w-5xl px-5 py-5 mx-auto lg:items-start lg:gap-x-5 lg:flex-row '>
          <article className='flex-1'>
            <BreadCrumbs data={breadCrumbsData}/>
            <img className='w-full rounded-xl' src={images.Post1Image} alt="laptop" />

            <Link to="/blog?category=selectedCategory" className='inline-block mt-4 text-sm text-primary md:text-base font-roboto '>Education</Link>

            <h1 className="mt-4 text-xl font-medium font-roboto text-dark-hard md:text-[26px]">Help children get better education</h1>

            <div className="mt-4 text-dark-soft">
              <p className='leading-7'> Prepared detailed UI designs and UML diagrams to guide development.
        Completed the database schema design and set up the development environment.
        Started frontend development by implementing the login page and the main interface.
        Continue frontend development for remaining pages (file management and dashboard).
        Begin backend integration for authentication and file uploads.
        Conduct testing of the initial UI components to ensure smooth functionality.
</p>
            </div>
            <CommentsContainer className="mt-10"/>
          </article>
          <SuggestedPost header="Latest Article" posts={postData} tags={tagsData} className="mt-8 lg:mt-0 lg:max-w-xs"/>
        </section>
    </MainLayout>
  )
}

export default ArticleDetails