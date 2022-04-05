import Video from './video/Video';
import './videos.css'

const videoData = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/jTuBwIkESOc"
    },
    {
        id: 2,
        url: "https://www.youtube.com/embed/QjkFv45Enoo"
    },
    {
        id: 3,
        url: "https://www.youtube.com/embed/Bos-ernnAYs"
    },
    {
        id: 4,
        url: "https://www.youtube.com/embed/FE8MZt1yg5I"
    },
    {
        id: 5,
        url: "https://www.youtube.com/embed/7hc-6M_9Hhs"
    },
]


function Videos () {
    return (
        <div className="videos">
            {videoData.map(item =><Video key={item.id} url={item.url} />
            )}
        </div>
    );
}


export default Videos;