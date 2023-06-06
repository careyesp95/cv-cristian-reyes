import './ButtonCv.css';

const data = '../assets/img/CvCristianReyes.pdf';
function ButtonCv() {

    function onHandleClick (data) {
        fetch(data)
        .then(res => res.blob())
        .then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const fileName = data.split('/').pop();
            const anchor = document.createElement('a');
            anchor.href = blobURL;
            anchor.target = '_blank';
            anchor.setAttribute('download',fileName)
            document.body.appendChild(anchor)
            anchor.click();
            anchor.remove();
        })
    }

    return (
        <button 
        className='button-cv' 
        onClick={() => onHandleClick(data)}
        > Resume Download
        </button>
    )
}
export default ButtonCv;
