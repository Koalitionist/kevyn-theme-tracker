export const initVideoBanner = async () => {
  document.querySelectorAll<HTMLElement>("[data-video-banner]").forEach((sectionElement) => {
    const sectionId = sectionElement.dataset?.videoBanner;

    document.addEventListener(`video--${sectionId}:closed`, (e) => {
      const iframe = sectionElement.querySelector<HTMLIFrameElement>("iframe");
      const video = sectionElement.querySelector<HTMLVideoElement>("video");
      if (video) {
        video.pause();
      }
      if (iframe) {
        const src = iframe.src;
        iframe.src = "";
        setTimeout(
          () => {
            iframe.src = src;
          },
          100
        );
      }
    });

    document.addEventListener(`video--${sectionId}:opened`, (e) => {
      const video = sectionElement.querySelector<HTMLVideoElement>("video");
      if (video) {
        video.play();
      }
    });
  });
};
