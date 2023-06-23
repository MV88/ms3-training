import React from 'react';

export default function HelloWorld(props) {
    return (
        <div
            style={
                props.useFixedStyle ? {
                    position: 'absolute',
                    zIndex: 100,
                    bottom: 35,
                    margin: 8,
                    left: '50%',
                    backgroundColor: '#ffffff',
                    padding: 8,
                    textAlign: 'center',
                    transform: 'translateX(-50%)'
                } : {}}
        >
            Hello {props.name}!
        </div>
    );
}
