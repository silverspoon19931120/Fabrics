const getScaleByDimesions = (imgW, imgH, resizeToW=0, resizeToH=0, mode='fit') => {

    resizeToW = typeof resizeToW !== 'number' ? 0 : resizeToW;
    resizeToH = typeof resizeToH !== 'number' ? 0 : resizeToH;

    let scaling = 1,
        rwSet = resizeToW !== 0,
        rhSet = resizeToH !== 0;

    if(mode === 'cover') { //cover whole area

        let dW = resizeToW - imgW,
            dH =  resizeToH - imgH;

        if (dW < dH) { //scale width
            scaling = rwSet ? Math.max(resizeToW / imgW,  resizeToH / imgH) : 1;
        }
        else { //scale height
            scaling = rhSet ? Math.max(resizeToW / imgW,  resizeToH / imgH) : 1;
        }

    }
    else { //fit into area

        if(imgW > imgH) {
            scaling = rwSet ? Math.min(resizeToW / imgW,  resizeToH / imgH) : 1;
        }
        else {
            scaling = rhSet ? Math.min(resizeToW / imgW,  resizeToH / imgH) : 1;
        }

    }

    return parseFloat(scaling.toFixed(10));

}

export { getScaleByDimesions };

const drawCirclePath = (cx,cy,r) => {
    return "M" + cx + "," + cy + "m" + (-r) + ",0a" + r + "," + r + " 0 1,0 " + (r * 2) + ",0a" + r + "," + r + " 0 1,0 " + (-r * 2) + ",0";
}

export { drawCirclePath };

const getFilter = (key, opts={}) => {

    if(typeof key === 'string') {

        key = key.toLowerCase();

        switch(key) {
            case 'grayscale':
                return new fabric.Image.filters.Grayscale();
            case 'sepia':
                return new fabric.Image.filters.Sepia();
            case 'kodachrome':
                return new fabric.Image.filters.Kodachrome();
            case 'black_white':
                return new fabric.Image.filters.BlackWhite();
            case 'vintage':
                return new fabric.Image.filters.Vintage();
            case 'technicolor':
                return new fabric.Image.filters.Technicolor();
            case 'brightness':
                return new fabric.Image.filters.Brightness(opts);
            case 'contrast':
                return new fabric.Image.filters.Contrast(opts);
            case 'removewhite':
                return new fabric.Image.filters.RemoveColor(opts);
        }

    }
    else if(Array.isArray(key)) {

        return new fabric.Image.filters.ColorMatrix({
            matrix: key,
        });

    }
    
    return null;

}

export { getFilter };

/**
 * Changes the DPI of a base64 image.
 *
 * @method changeBase64DPI
 * @param {dataURI} string A base64 data uri representing the image(png or jpeg).
 * @param {dpi} number The target DPI.
 * @return {String} Returns the base64 image with the new DPI.
 * @static
 */
const changeBase64DPI = (dataURI, dpi=72) => {

    return dpi == 72 ? dataURI : changeDpiDataUrl(dataURI, dpi);

}

export { changeBase64DPI };

if(window) {

    window.FPDFabricUtils = {
        getScaleByDimesions: getScaleByDimesions
    }

}
