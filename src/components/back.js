import Link from 'next/link'

const Back = () => {
  return (
    <Link href="/">
      <a className="text-decoration-none">
        <div className="d-flex align-items-center">
          <div className="h4 mb-0">
            <i className="bi-arrow-left"></i>
          </div>
          <div className="ms-2">
            Back
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Back
