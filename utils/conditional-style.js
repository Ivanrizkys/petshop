const getStyleAos = (screen, dekstop, mobile) => {
    return screen > 640 ? dekstop : mobile;
}

export {getStyleAos};