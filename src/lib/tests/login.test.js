import React from "react";
import { render, act, fireEvent } from '@testing-library/react';
import { Login } from "../login";

describe("useLoginHook", () => {
    it("gets username and password and logs you in", () => {
        
        const { getByPlaceholderText, getByText } = render(<Login />);
        const usernameInput = getByPlaceholderText(/username/i);
        const passwordInput = getByPlaceholderText(/password/i);
        const errorUsername = getByPlaceholderText(/err_name/i);
        const errorPassword = getByPlaceholderText(/err_word/i);

        fireEvent.change(usernameInput, { target: { value: "Daemon" } });
        fireEvent.change(passwordInput, { target: { value: "Abcd-1234" } });
        fireEvent.click(getByText(/Login/i));

        expect(usernameInput.value).toEqual('Daemon');
        expect(passwordInput.value).toEqual('Abcd-1234');

        expect(errorUsername.innerHTML).toEqual('');
        expect(errorPassword.innerHTML).toEqual('');
    });
});