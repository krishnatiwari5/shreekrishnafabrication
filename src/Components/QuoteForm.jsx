import React from 'react'

export default function QuoteForm({close}) {
  return (
    <div>
        <form action="" className='quoteform'>
<div className="qicontainer">
    <input type="text" required/>
    <label htmlFor="name" className='ilabel'> <span className="content-name">Name</span> </label>
</div>
<div className="qicontainer">
    <input type="tel" required  pattern="[0-9]{10}" maxLength={12}/>
    <label htmlFor="phone" className='ilabel'> <span className="content-name" >Phone Number</span> </label>
</div>
<div className="qicontainer">
    <input type="email" required className='email' />
    <label htmlFor="email" className='ilabel'> <span className="content-name">Email</span> </label>
</div>
<div className="qtcontainer">
    <label className='tlabel' htmlFor="help">How can we help you?</label>
    <textarea name="help" id="help" cols="30" rows="5" required placeholder='I was wondering about availability and rates. I need help with the following:' className='qtextarea'></textarea>
</div>
<div className="qbtnc">
    <button type='submit'>SUBMIT</button>
    <button onClick={close}>CLOSE</button>
</div>
        </form>
    </div>
  )
}
