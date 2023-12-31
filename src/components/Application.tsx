const Application = () => {
    const handleInput = () => {}
    return (
        <>
        <h1>Job Application Form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <img src="https://via.placeholder.com/150" alt="a person with a laptop"/>
        <span title='close'>X</span>
        <div data-testid="custom-element">Custom HTML nameElement</div>
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input type="text" value="Priya" onChange={handleInput} id="name" placeholder="FullName"/>
            </div>
            <div>
                <label htmlFor='bio'>Bio</label>
                <textarea id='bio' name='bio'></textarea>
            </div>
            <div>
                <label htmlFor="job-location">Name</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type='checkbox' id="terms"/>I agree to the terms and conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
        </>
    )
}

export default Application