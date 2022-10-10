import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '@/assets/images';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)} //nghĩa là mặc định image của mình nó vẫn có thuộc tính css của thằng wrapper. trong tương lai muốn custom riêng các bạn truyền thêm được class từ bên ngoài vào
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
}

export default forwardRef(Image);
