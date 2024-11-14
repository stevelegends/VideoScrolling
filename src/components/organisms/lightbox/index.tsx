import React from 'react';

// import * as MediaLibrary from 'expo-media-library';
import {useLightbox, useLightboxControls} from './useLightbox';
import ImageView from './image-viewing';

export function Lightbox() {
  const {activeLightbox} = useLightbox();
  const {closeLightbox} = useLightboxControls();

  const onClose = React.useCallback(() => {
    closeLightbox();
  }, [closeLightbox]);

  /**
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions({
    granularPermissions: ['photo'],
  });
   */

  const saveImageToAlbumWithToasts = React.useCallback(
    async (uri: string) => {
      /*
      if (!permissionResponse || permissionResponse.granted === false) {
        alert('Permission to access camera roll is required.')
        if (permissionResponse?.canAskAgain) {
          requestPermission();
        } else {
         alert('Permission to access camera roll was denied. Please enable it in your system settings.')
        }
        return;
      }
      try {
        await saveImageToMediaLibrary({uri});
        alert('Saved to your camera roll.')
      } catch (e: any) {
        alert(`Failed to save image: ${String(e)}`)
      }
       */
    },
    // [permissionResponse, requestPermission, _],
    [],
  );

  return (
    <ImageView
      lightbox={activeLightbox}
      onRequestClose={onClose}
      onPressSave={saveImageToAlbumWithToasts}
      onPressShare={uri => {
        console.log('share::', uri);
        // shareImageModal({uri})
      }}
    />
  );
}
