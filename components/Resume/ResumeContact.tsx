import {
    faEnvelope,
    faMapMarkerAlt,
    faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import GridContent from '../Utils/GridContent';
import GridContentWrapper from '../Utils/GridContentWrapper';
import styles from './ResumeContact.module.scss';

export default function ResumeContact() {
    return (
        <GridContentWrapper className={styles.contact}>
            <GridContent type={faPhoneAlt}>
                <a href="tel:0343391712">034-339-1712</a>
            </GridContent>
            <GridContent type={faEnvelope}>
                <a href="mailto:thaotram.april@gmail.com">
                    thaotram.april@gmail.com
                </a>
            </GridContent>
            <GridContent type={faMapMarkerAlt}>
                <div className="pt-4">
                    47/24/3A, Bui Dinh Tuy, Ward 24
                    <br />
                    Binh Thanh District, HCM City
                </div>
            </GridContent>
        </GridContentWrapper>
    );
}
