
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>ABOUT</h5>
        <p>How GetAway works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>GetAway Plus</p>
        <p>Careers</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>GetAway: Disaster relief housing</p>
        <p>Diversity and combating discrimination</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>GetAway your home</p>
        <p>Explore hosting resources</p>
        <p>Visit our community forum</p>
        <p>How to host responsibly</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help center</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 response</p>
        <p>Report a neighborhood concern</p>
      </div>
    </div>
  )
}

export default Footer;