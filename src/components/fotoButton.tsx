import * as htmlToImage from "html-to-image";


export const FotoButton = ({label}: {label: string}) => {

    const handleHacerFoto = () => {
        const portada = document.querySelector('.portada')
        if(portada){
            htmlToImage.toJpeg(portada as HTMLElement)
                .then(function (dataUrl) {
                    let link = document.createElement('a');
                    link.download = `${label}.jpeg`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });

            /*
            htmlToImage.toPng(portada as HTMLElement)
                .then(function (dataUrl) {
                    var img = new Image();
                    img.src = dataUrl;
                    document.body.appendChild(img);
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
             */
        }
    }

    return (<button className={"text-white bg-azul p-2 mt-2 w-full font-bold border-2"}
                    onClick={handleHacerFoto}>Hacer foto
    </button>)
}