import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import Button from "react-bootstrap/Button";
import "./styles.css";

const AvatarCropper = ({ image, onCrop, onCancel }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(0.9);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleCropDone = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedAreaPixels);
      onCrop(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, image, onCrop]);

  return (
    <div className="cropper-container">
      <div className="cropper-wrapper">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          cropShape="round"
          showGrid={false}
          restrictPosition={true}
          minZoom={0.5}
          maxZoom={3}
          zoomWithScroll
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      <div className="cropper-controls">
        <input
          type="range"
          value={zoom}
          min={0.5}
          max={3}
          step={0.1}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
        <div className="mt-2 d-flex gap-2">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCropDone}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCropper;
