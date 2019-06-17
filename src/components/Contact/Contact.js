/* eslint-disable jsx-a11y/tabindex-no-positive */
import React from 'react'
import styled from 'styled-components'

export const ContactWrapperStyle = styled.div`
    width: 92.5%;
    max-width: 1026px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem auto;
    background: rgb(207, 203, 177);
    padding: 1.5rem 0 0;
    letter-spacing: 0.07em;
    & h1 {
        font-weight: 600;
    }
    & form {
        width: 90%;
        margin: 0 auto;
        & div {
            display: flex;
            flex-direction: column;
            margin: 1rem auto;
            letter-spacing: 0.1em;
            color: rgb(25, 13, 8);
        }
        & ul {
            margin-bottom: 3rem;
            list-style-type: none;
            margin-left: 0;
        }
        & input {
            -webkit-rtl-ordering: none;
            outline: none;
            height: 2rem;
            padding: 7px 5px 3px;
            background: #fdf6e3;
            border: none;
            box-shadow: none;
            letter-spacing: 0.1em;
            & ::placeholder {
                letter-spacing: 0.1em;
                color: rgb(25, 13, 8);
            }
        }
        & textarea {
            box-shadow: none;
            border: none;
            outline: none;
            background: #fdf6e3;
            padding: 5px;
            color: rgba(25, 13, 8);
            letter-spacing: 0.1em;
        }
        & ul li input {
            color: rgb(25, 13, 8);
            padding-top: 7px;
            display: flex;
            cursor: pointer;
        }
    }
`

const Contact = () => {
    return (
        <ContactWrapperStyle as="div">
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
                        placeholder="type name here"
                        tabIndex="1"
                    />
                </div>
                <div className="field half">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="type email here"
                        tabIndex="2"
                    />
                </div>
                <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="6"
                        placeholder="type message here"
                        tabIndex="3"
                    />
                </div>
                <ul className="actions">
                    <li>
                        <input
                            type="submit"
                            value="Send Message"
                            tabIndex="4"
                            title={`click to send message when you have completed typing`}
                        />
                    </li>
                    <li>
                        <input
                            type="reset"
                            value="Clear"
                            tabIndex="5"
                            title={`click to clear form when you have completed sending your message`}
                        />
                    </li>
                </ul>
            </form>
        </ContactWrapperStyle>
    )
}
export default Contact
