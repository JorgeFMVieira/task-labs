const colors = {
    main: '#78C6A3', // Soft Red
    text: '#000000', // Soft White
    secondaryText: '#FFFFFF', // Muted Gray
    background: '#F9F9F9', // Soft Off-White
    neutral: '#757575', // Light Gray
    input: '#EDEDED',
    mainOpacity: 'rgba(120, 198, 163, 0.3)',
    error: '#dc3545',
    success: '#28a745'
  } as const; // This ensures that the values can't be accidentally changed.
  
  export type Colors = typeof colors;
  
  export default colors;
  