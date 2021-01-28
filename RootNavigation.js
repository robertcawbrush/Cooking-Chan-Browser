import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name) {
	console.log(navigationRef);
	navigationRef.current?.navigate(name);
}