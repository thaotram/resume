import {
    faEnvelope,
    faMapMarkerAlt,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import GridContent from '../Utils/GridContent';
import GridContentWrapper from '../Utils/GridContentWrapper';
import styles from './ResumeContact.module.scss';
import cn from 'classnames';

export default function ResumeContact(props: { className?: string }) {
    return (
        <GridContentWrapper className={cn(styles.contact, props.className)}>
            <GridContent type={faPhone} position="bottom">
                <a href="tel:0343391712">034-339-1712</a>
            </GridContent>
            <GridContent type={faEnvelope} position="bottom">
                <a href="mailto:thaotram.april@gmail.com">
                    thaotram.april@gmail.com
                </a>
            </GridContent>
            <GridContent type={faMapMarkerAlt} position="bottom">
                <div>
                    47/24/3A, Bui Dinh Tuy, Ward 24
                    <br />
                    Binh Thanh District, HCM City
                </div>
            </GridContent>
        </GridContentWrapper>
    );
}
