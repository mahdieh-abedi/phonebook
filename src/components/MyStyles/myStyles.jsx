export const ContainerStyle = (theme) => {
  return { backgroundColor: theme.backGround };
};
export const IconStyle = (theme) => {
  return { color: theme.iconColor };
};
export const ButtonStyle = (theme) => {
  return { color: theme.buttonColor };
};
export const HeaderStyle = (theme) => {
  return { backgroundColor: theme.backGround, color: theme.color };
};
export const HeaderContainerStyle = (theme) => {
  return { backgroundColor: theme.headerBachGround, borderRadius: 5 };
};
export const DividerStyle = (theme) => {
  return {
    padding: 10,
    fontSize: 14,
    fontWeight: 900,
    backgroundColor: theme.dividerBackground,
    borderRadius: 10,
  };
};
export const FavoriteIconStyle = (theme) => {
  return { color: theme.favoriteColor };
};
export const FontStyle = (theme) => {
  return { color: theme.color, fontWeight: 500 };
};
export const DeleteButtonStyle = (theme) => {
  return { color: theme.deleteIcon };
};
export const ModeIconsStyle = (theme) => {
  return { color: theme.color, fontSize: 20 };
};
export const SettingPageStyle = (theme) => {
  return { backgroundColor: theme.backGround, width: 300, height: 600 };
};
