function PersonalDetailPreview({ resumeInfo }) {
  const theme = resumeInfo?.themecolor || resumeInfo?.themeColor || '#2a6ef5'

  return (
    <div>
      <h2
        className='font-bold text-xl text-center'
        style={{ color: theme }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>

      <h2 className='text-center text-sm font-medium my-1'>
        {resumeInfo?.jobTitle}
      </h2>

      <h2
        className='text-center font-normal text-xs'
        style={{ color: theme }}
      >
        {resumeInfo?.address}
      </h2>

      <div
        className='flex justify-between text-xs font-normal mt-1'
        style={{ color: theme }}
      >
        <h2>{resumeInfo?.Phone}</h2>
        <h2>{resumeInfo?.email}</h2>
      </div>

      <hr className='my-2' style={{ borderColor: theme }} />
    </div>
  )
}

export default PersonalDetailPreview