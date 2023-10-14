import { useState } from 'react';

export const useDropdown = (initialValue = null) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(initialValue);
  const handleOpenMenuClick = (event: React.MouseEvent<HTMLDivElement>) =>
    setAnchorEl(event.currentTarget);
  const handleCloseMenuClick = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  return {
    anchorEl,
    handleCloseMenuClick,
    handleOpenMenuClick,
    open,
  };
};
