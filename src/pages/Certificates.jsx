import React from 'react'
import { certificates } from '../assets/assets'
import CertificateCard from '../components/CertificateCard'

const Certificates = () => {
  return (
    <div>
        {certificates.length?(certificates.map(certificate => <CertificateCard key={certificate.id} txt={'Completed a Udemy Course on Portfolios'} id={certificate.id} link={certificate.link} title={certificate.title} img={certificate.img} date={certificate.date} institute={certificate.institution} />)):"No certificates to show"}
    </div>
  )
}

export default Certificates