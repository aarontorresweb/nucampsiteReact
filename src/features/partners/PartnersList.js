import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Partner from '../../components/Partner.js';
import { selectAllPartners } from './partnersSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    // console.log(partners);
    // console.log(partners[2].id);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errMsg = useSelector((state) => state.partners.errMsg);

    return isLoading ? (
        <Loading />
    ) : errMsg ? (
        <Error errMsg={errMsg} />
    ) : ( 
        <Col className='mt-4'>
            {
                partners.map(partner => {
                    return(
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner}/>
                        </div>
                    )
                })
            }
        </Col>
    );
}
        // // This is the broken function that I had trouble with. 
        // // I left it in just for comparison and perhaps understanding later what is wrong with it.
        // {
        //     partners.map(partner =>
        //          {
        //              return(
        //                 <div className='d-flex mb-5' key={partner.id}>
        //                      <Partner partner={partner}/>
        //                  </div>
        //              )
        //          }
        //  };

export default PartnersList;