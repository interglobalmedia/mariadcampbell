import React from 'react'
import styled from '@emotion/styled'

export const ContactWrapperStyle = styled.div`
    width: 92.5%;
    max-width: 1026px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
    background: rgba(250, 238, 184, 1);
    padding: 1.5rem 0 0;
    letter-spacing: 0.07em;
    & form {
        width: 90%;
        margin: 0 auto;
        & div {
            display: flex;
            flex-direction: column;
            margin: 1rem auto;
            letter-spacing: 0.1em;
            color: #007acc;
        }
        & ul {
            margin-bottom: 3rem;
            list-style-type: none;
            margin-left: 0;
        }
        & input {
            -webkit-appearance: none;
            -webkit-rtl-ordering: none;
            outline: none;
            border: 0;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            height: 2rem;
            padding: 7px 5px 3px;
            letter-spacing: 0.1em;
            & ::placeholder {
                letter-spacing: 0.1em;
                color: #007acc;
            }
        }
        & textarea {
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
            padding: 5px;
            color: #007acc;
            letter-spacing: 0.1em;
            outline: none;
        }
        & ul li input {
            color: #007acc;
            padding-top: 7px;
            display: flex;
        }
    }
`

const Contact = () => {
    return (
        <ContactWrapperStyle>
            <h1>Contact</h1>
            <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="bot-field" />
                <div className="field half first">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="6"
                        placeholder="Message"
                    />
                </div>
                <ul className="actions">
                    <li>
                        <input
                            style={{
                                borderRadius: '2px',
                                cursor: 'pointer',
                                background: 'white',
                            }}
                            type="submit"
                            value="Send Message"
                        />
                    </li>
                    <li>
                        <input
                            style={{
                                borderRadius: '2px',
                                cursor: 'pointer',
                                background: 'white',
                            }}
                            type="reset"
                            value="Clear"
                        />
                    </li>
                </ul>
            </form>
        </ContactWrapperStyle>
    )
}
export default Contact
