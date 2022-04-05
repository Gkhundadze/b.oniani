import './video.css'


function Video (props) {
    return (
        <div className='video-card'>
            <iframe 
            width="380" 
            height="315" 
            src={props.url} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </div>
    )
}

export default Video;