import React from "react";

export const Messages: React.FunctionComponent<{ messages: string[] }> =
    ({ messages }) => (
        messages.length > 0 ?
            (
                <div>
                    <p>
                        you have {messages.length} new messages.
                    </p>
                </div>
            ) : (
                <></>
            )
    );







