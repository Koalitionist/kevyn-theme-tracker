import { FC } from "react";

export const CloseIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const PlusIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.00019 1.83331V11.1666M1.3335 6.49998H10.6668"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const MinusIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M1.3335 1.5H10.6668"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ChevronUpDownIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const FacebookIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
    </svg>
  );
};

export const PinterestIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"></path>
    </svg>
  );
};

export const TwitterIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
    </svg>
  );
};

export const EmailIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M1 4L9.16492 9.71544C9.82609 10.1783 10.1567 10.4097 10.5163 10.4993C10.8339 10.5785 11.1661 10.5785 11.4837 10.4993C11.8433 10.4097 12.1739 10.1783 12.8351 9.71544L21 4M5.8 17H16.2C17.8802 17 18.7202 17 19.362 16.673C19.9265 16.3854 20.3854 15.9265 20.673 15.362C21 14.7202 21 13.8802 21 12.2V5.8C21 4.11984 21 3.27976 20.673 2.63803C20.3854 2.07354 19.9265 1.6146 19.362 1.32698C18.7202 1 17.8802 1 16.2 1H5.8C4.11984 1 3.27976 1 2.63803 1.32698C2.07354 1.6146 1.6146 2.07354 1.32698 2.63803C1 3.27976 1 4.11984 1 5.8V12.2C1 13.8802 1 14.7202 1.32698 15.362C1.6146 15.9265 2.07354 16.3854 2.63803 16.673C3.27976 17 4.11984 17 5.8 17Z"></path>
    </svg>
  );
};

export const ChevronRightIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.52858 3.52864C5.78892 3.26829 6.21103 3.26829 6.47138 3.52864L10.4714 7.52864C10.7317 7.78899 10.7317 8.2111 10.4714 8.47145L6.47138 12.4714C6.21103 12.7318 5.78892 12.7318 5.52858 12.4714C5.26823 12.2111 5.26823 11.789 5.52858 11.5286L9.05717 8.00004L5.52858 4.47145C5.26823 4.2111 5.26823 3.78899 5.52858 3.52864Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ChevronLeftIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4714 3.52864C10.7317 3.78899 10.7317 4.2111 10.4714 4.47145L6.9428 8.00004L10.4714 11.5286C10.7317 11.789 10.7317 12.2111 10.4714 12.4714C10.2111 12.7318 9.78894 12.7318 9.52859 12.4714L5.52859 8.47145C5.26824 8.2111 5.26824 7.78899 5.52859 7.52864L9.52859 3.52864C9.78894 3.26829 10.2111 3.26829 10.4714 3.52864Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TimerIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
};

export const SearchIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 19L13.0001 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CheckMarkIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.49999 16.255L2.24499 10L0.11499 12.115L8.49999 20.5L26.5 2.50001L24.385 0.38501L8.49999 16.255Z"
        fill="currentColor"
      />
    </svg>
  );
};
