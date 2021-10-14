import React,{useState,useEffect} from 'react'
import HomePageContent from '../components/homepagecontent'

const Home = (props) => {


  const onResumeSelect = (e) => {
    const id = e.currentTarget.dataset.id;

      localStorage.setItem('templateResumeID',id)
     props.history.push('/resume/contact/add')

  }

  return (
    <div>
    <HomePageContent  onResumeSelect={onResumeSelect}/>
    </div>
  )
}

export default Home
