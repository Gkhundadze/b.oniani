import './poem.css'

function Poem (props) {
    console.log(props);
    return (
        <div className="poem">
            <h3 className='poem-title'>{props.poemTitle}</h3>
            <p className='poem-itself'>{props.poem}</p>
        </div>
    );
}


export default Poem;