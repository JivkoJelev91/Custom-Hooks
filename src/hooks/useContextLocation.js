import { useState } from 'react';

const useContextLocation = initialValue => {
  const [openedContextMenu, setOpenedContextMenu] = useState(initialValue);

  return [
    openedContextMenu,
    (e, data) => {
      setOpenedContextMenu(
        e
          ? {
              ...data,
              contextLocation: {
                top: e.pageY,
                left: e.pageX,
              },
            }
          : null
      );
    },
  ];
};

export default useContextLocation;
