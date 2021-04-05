import React,{useEffect} from 'react'
import CategoryBar from '../Components/CategoryBar'
import Video from '../Components/Video'
import  {Container, Col, Row } from 'react-bootstrap'
import{useDispatch, useSelector} from 'react-redux'
import { getPopularVideos,getVideosByCategory } from '../video.action'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonsVideos from '../Components/SkeletonsVideos'
const HomeScreen=()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])
    const{videos,activeCategory,loading}=useSelector(state=>state.homeVideos)
    const fetchData = () => {
        if (activeCategory === 'All') dispatch(getPopularVideos())
      else {
         dispatch(getVideosByCategory(activeCategory))
      }

    }
    return (
        <Container>
            <CategoryBar/>
            <Row>
      
            
            <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            className='row'>
            {!loading
               ? videos.map(video => (
                    <Col lg={3} md={4}>
                       <Video video={video} key={video.id} />
                    </Col>
                 ))
               : [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                       <SkeletonsVideos />
                    </Col>
                 ))}
         </InfiniteScroll>
         
               
         

            </Row>
            
                 </Container>
    )
}

export default HomeScreen
