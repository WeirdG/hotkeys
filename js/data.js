// Keyboard Shortcuts Data — 15 products across 3 categories
// Last updated: 2026-06-05

export const CATEGORIES = {
  os: {
    id: 'os',
    name: 'Operating Systems',
    shortName: 'OS',
    icon: 'monitor'
  },
  utility: {
    id: 'utility',
    name: 'Utilities & Tools',
    shortName: 'Utilities',
    icon: 'wrench'
  },
  productivity: {
    id: 'productivity',
    name: 'Productivity Software',
    shortName: 'Productivity',
    icon: 'briefcase'
  },
  browsers: {
    id: 'browsers',
    name: 'Web Browsers',
    shortName: 'Browsers',
    icon: 'globe'
  }
};

export const products = [
  // ============ OS ============
  {
    id: 'macos',
    name: 'macOS',
    description: "Apple's desktop operating system for Mac computers, known for its Unix foundation and seamless integration with Apple hardware.",
    os: ['macOS'],
    category: 'os',
    color: '#a2aaad',
    shortcuts: {
      'System & Desktop': [
        { action: 'Open Spotlight Search', mac: 'Cmd+Space' },
        { action: 'Force Quit Applications', mac: 'Cmd+Opt+Esc' },
        { action: 'Lock Screen', mac: 'Ctrl+Cmd+Q' },
        { action: 'Log Out Immediately', mac: 'Shift+Cmd+Q' },
        { action: 'Sleep', mac: 'Opt+Cmd+Eject' },
        { action: 'Screenshot (full screen)', mac: 'Cmd+Shift+3' },
        { action: 'Screenshot (selected area)', mac: 'Cmd+Shift+4' },
        { action: 'Screenshot (window)', mac: 'Cmd+Shift+4 then Space' },
        { action: 'Screen Recording', mac: 'Cmd+Shift+5' },
        { action: 'Open Emoji & Symbols Picker', mac: 'Ctrl+Cmd+Space' },
        { action: 'Show Desktop (hide windows)', mac: 'Cmd+F3 or F11' },
        { action: 'Launchpad (show apps)', mac: 'F4' },
        { action: 'Mission Control (expose)', mac: 'Ctrl+Up or F3' },
        { action: 'App Expose', mac: 'Ctrl+Down' },
        { action: 'Switch Between Open Apps', mac: 'Cmd+Tab' },
        { action: 'Quick Look (preview file)', mac: 'Spacebar' }
      ],
      'Finder & File Management': [
        { action: 'New Finder Window', mac: 'Cmd+N' },
        { action: 'New Folder', mac: 'Cmd+Shift+N' },
        { action: 'Open Selected File', mac: 'Cmd+O or Cmd+Down' },
        { action: 'Go to Enclosing Folder', mac: 'Cmd+Up' },
        { action: 'Get Info', mac: 'Cmd+I' },
        { action: 'Show/Hide Sidebar', mac: 'Cmd+Opt+S' },
        { action: 'Show/Hide Path Bar', mac: 'Cmd+Opt+P' },
        { action: 'Open Go to Folder', mac: 'Cmd+Shift+G' },
        { action: 'Open Home Folder', mac: 'Shift+Cmd+H' },
        { action: 'Open Downloads', mac: 'Cmd+Opt+L' },
        { action: 'Open Desktop Folder', mac: 'Shift+Cmd+D' },
        { action: 'Delete to Trash', mac: 'Cmd+Delete' },
        { action: 'Empty Trash', mac: 'Cmd+Shift+Delete' },
        { action: 'Duplicate File', mac: 'Cmd+D' },
        { action: 'Rename Selected', mac: 'Enter' }
      ],
      'Window Management': [
        { action: 'Minimize Window', mac: 'Cmd+M' },
        { action: 'Hide Current App', mac: 'Cmd+H' },
        { action: 'Hide All Other Apps', mac: 'Cmd+Opt+H' },
        { action: 'Enter/Exit Full Screen', mac: 'Ctrl+Cmd+F' },
        { action: 'Close Window', mac: 'Cmd+W' },
        { action: 'Close Application', mac: 'Cmd+Q' },
        { action: 'Cycle Through App Windows', mac: 'Cmd+\u0060' }
      ],
      'Text Editing (System-Wide)': [
        { action: 'Copy', mac: 'Cmd+C' },
        { action: 'Cut', mac: 'Cmd+X' },
        { action: 'Paste', mac: 'Cmd+V' },
        { action: 'Paste and Match Style', mac: 'Cmd+Opt+Shift+V' },
        { action: 'Select All', mac: 'Cmd+A' },
        { action: 'Undo', mac: 'Cmd+Z' },
        { action: 'Redo', mac: 'Cmd+Shift+Z' },
        { action: 'Find', mac: 'Cmd+F' },
        { action: 'Find Next', mac: 'Cmd+G' },
        { action: 'Bold', mac: 'Cmd+B' },
        { action: 'Italic', mac: 'Cmd+I' },
        { action: 'Underline', mac: 'Cmd+U' },
        { action: 'Move to Beginning of Line', mac: 'Cmd+Left' },
        { action: 'Move to End of Line', mac: 'Cmd+Right' },
        { action: 'Move to Start of Doc', mac: 'Cmd+Up' },
        { action: 'Move to End of Doc', mac: 'Cmd+Down' },
        { action: 'Move by Word (Left/Right)', mac: 'Opt+Left/Right' },
        { action: 'Delete Word Backward', mac: 'Opt+Delete' },
        { action: 'Select to End of Line', mac: 'Shift+Cmd+Right' }
      ],
      'Accessibility & Special': [
        { action: 'VoiceOver (Screen Reader)', mac: 'Cmd+F5' },
        { action: 'Invert Colors', mac: 'Ctrl+Opt+Cmd+8' },
        { action: 'Siri', mac: 'Hold Cmd+Space' }
      ]
    }
  },
  {
    id: 'microsoft-windows',
    name: 'Microsoft Windows',
    description: "Microsoft's flagship operating system for personal computers, workstations, and enterprise environments.",
    os: ['Windows'],
    category: 'os',
    color: '#0078d4',
    shortcuts: {
      'General & Desktop': [
        { action: 'Open Start Menu', windows: 'Win' },
        { action: 'Open Settings', windows: 'Win+I' },
        { action: 'Open File Explorer', windows: 'Win+E' },
        { action: 'Lock PC', windows: 'Win+L' },
        { action: 'Show Desktop', windows: 'Win+D' },
        { action: 'Open Run Dialog', windows: 'Win+R' },
        { action: 'Open Search', windows: 'Win+S' },
        { action: 'Open Task View', windows: 'Win+Tab' },
        { action: 'Create New Virtual Desktop', windows: 'Ctrl+Win+D' },
        { action: 'Switch Virtual Desktop', windows: 'Ctrl+Win+Left/Right' },
        { action: 'Close Virtual Desktop', windows: 'Ctrl+Win+F4' },
        { action: 'Open Quick Link Menu', windows: 'Win+X' },
        { action: 'Open Clipboard History', windows: 'Win+V' },
        { action: 'Open Emoji Picker', windows: 'Win+.' },
        { action: 'Take Screenshot (Snipping)', windows: 'Win+Shift+S' },
        { action: 'Open Game Bar', windows: 'Win+G' },
        { action: 'Open Widgets', windows: 'Win+W' }
      ],
      'Window Management': [
        { action: 'Snap Window Left', windows: 'Win+Left' },
        { action: 'Snap Window Right', windows: 'Win+Right' },
        { action: 'Maximize Window', windows: 'Win+Up' },
        { action: 'Minimize Window', windows: 'Win+Down' },
        { action: 'Toggle Fullscreen', windows: 'F11' },
        { action: 'Alt+Tab Switcher', windows: 'Alt+Tab' },
        { action: 'Cycle Backwards', windows: 'Alt+Shift+Tab' },
        { action: 'Close Current Window', windows: 'Alt+F4' },
        { action: 'Move to Other Monitor', windows: 'Win+Shift+Left/Right' }
      ],
      'Taskbar & Desktop': [
        { action: 'Open Taskbar App (1-10)', windows: 'Win+1 through Win+0' },
        { action: 'New Instance of Taskbar App', windows: 'Win+Shift+1 through 0' },
        { action: 'Open Task Manager', windows: 'Ctrl+Shift+Esc' },
        { action: 'Rename Selected (Explorer)', windows: 'F2' },
        { action: 'Refresh', windows: 'F5' },
        { action: 'Properties of Selected', windows: 'Alt+Enter' }
      ],
      'Text & Clipboard': [
        { action: 'Select All', windows: 'Ctrl+A' },
        { action: 'Copy', windows: 'Ctrl+C' },
        { action: 'Cut', windows: 'Ctrl+X' },
        { action: 'Paste', windows: 'Ctrl+V' },
        { action: 'Undo', windows: 'Ctrl+Z' },
        { action: 'Redo', windows: 'Ctrl+Y' },
        { action: 'Find', windows: 'Ctrl+F' },
        { action: 'Save', windows: 'Ctrl+S' },
        { action: 'Print', windows: 'Ctrl+P' },
        { action: 'Delete Word Forward', windows: 'Ctrl+Delete' },
        { action: 'Delete Word Backward', windows: 'Ctrl+Backspace' }
      ],
      'File Explorer': [
        { action: 'Open File Explorer', windows: 'Win+E' },
        { action: 'New Folder', windows: 'Ctrl+Shift+N' },
        { action: 'Delete to Recycle Bin', windows: 'Delete' },
        { action: 'Permanently Delete', windows: 'Shift+Delete' },
        { action: 'Rename', windows: 'F2' },
        { action: 'Go to Address Bar', windows: 'Alt+D' },
        { action: 'Go Up One Level', windows: 'Alt+Up' },
        { action: 'Go Back/Forward', windows: 'Alt+Left/Right' },
        { action: 'Preview Pane Toggle', windows: 'Alt+P' },
        { action: 'Select All', windows: 'Ctrl+A' }
      ]
    }
  },
  {
    id: 'chromeos',
    name: 'ChromeOS',
    description: "Google's Linux-based operating system designed for Chromebooks, centered around the Chrome browser and cloud computing.",
    os: ['ChromeOS'],
    category: 'os',
    color: '#4285f4',
    shortcuts: {
      'System & Display': [
        { action: 'Open Status Area', chromeos: 'Shift+Alt+S' },
        { action: 'Open Files App', chromeos: 'Shift+Alt+M' },
        { action: 'Lock Screen', chromeos: 'Search+L' },
        { action: 'Sign Out', chromeos: 'Shift+Ctrl+Q (twice)' },
        { action: 'Take Full Screenshot', chromeos: 'Ctrl+Show Windows' },
        { action: 'Take Partial Screenshot', chromeos: 'Shift+Ctrl+Show Windows' },
        { action: 'Toggle Caps Lock', chromeos: 'Search+Alt' },
        { action: 'Rotate Screen 90\ufffd', chromeos: 'Ctrl+Shift+Refresh' },
        { action: 'Toggle Fullscreen', chromeos: 'F4' },
        { action: 'Show All Shortcuts', chromeos: 'Ctrl+Search+S' }
      ],
      'Window & Desk Management': [
        { action: 'Open New Window', chromeos: 'Ctrl+N' },
        { action: 'Open Incognito Window', chromeos: 'Ctrl+Shift+N' },
        { action: 'Close Current Window', chromeos: 'Ctrl+Shift+W' },
        { action: 'Dock Window Left', chromeos: 'Alt+[' },
        { action: 'Dock Window Right', chromeos: 'Alt+]' },
        { action: 'Maximize Window', chromeos: 'Alt+=' },
        { action: 'Minimize Window', chromeos: 'Alt+-' },
        { action: 'Switch Windows', chromeos: 'Alt+Tab' },
        { action: 'Create New Desk', chromeos: 'Shift+Search+=' },
        { action: 'Switch Desk Left/Right', chromeos: 'Search+[ or ]' },
        { action: 'Shelf App Icons (1-8)', chromeos: 'Alt+1 through Alt+9' }
      ],
      'Tab & Browser': [
        { action: 'New Tab', chromeos: 'Ctrl+T' },
        { action: 'Close Tab', chromeos: 'Ctrl+W' },
        { action: 'Reopen Closed Tab', chromeos: 'Ctrl+Shift+T' },
        { action: 'Switch to Tab (1-8)', chromeos: 'Ctrl+1 through Ctrl+8' },
        { action: 'Go to Last Tab', chromeos: 'Ctrl+9' },
        { action: 'Next Tab', chromeos: 'Ctrl+Tab' },
        { action: 'Reload Page', chromeos: 'Ctrl+R' },
        { action: 'Go Back/Forward', chromeos: 'Alt+Left/Right' },
        { action: 'Open Bookmarks Manager', chromeos: 'Ctrl+Shift+O' },
        { action: 'Developer Tools', chromeos: 'Ctrl+Shift+I' },
        { action: 'Task Manager', chromeos: 'Search+Esc' },
        { action: 'Show Downloads', chromeos: 'Ctrl+J' },
        { action: 'Show History', chromeos: 'Ctrl+H' }
      ],
      'Text Editing': [
        { action: 'Select All', chromeos: 'Ctrl+A' },
        { action: 'Copy', chromeos: 'Ctrl+C' },
        { action: 'Cut', chromeos: 'Ctrl+X' },
        { action: 'Paste', chromeos: 'Ctrl+V' },
        { action: 'Paste as Plain Text', chromeos: 'Ctrl+Shift+V' },
        { action: 'Undo', chromeos: 'Ctrl+Z' },
        { action: 'Redo', chromeos: 'Ctrl+Shift+Z' },
        { action: 'Delete Previous Word', chromeos: 'Ctrl+Backspace' },
        { action: 'Open Clipboard Menu', chromeos: 'Search+V' },
        { action: 'Emoji Picker', chromeos: 'Search+Shift+Space' }
      ],
      'Accessibility': [
        { action: 'ChromeVox Screen Reader', chromeos: 'Ctrl+Alt+Z' },
        { action: 'High Contrast Mode', chromeos: 'Search+Ctrl+H' },
        { action: 'Full Screen Magnifier', chromeos: 'Ctrl+Search+M' },
        { action: 'Switch Keyboard Language', chromeos: 'Ctrl+Shift+Space' }
      ]
    }
  },
  {
    id: 'chromebooks',
    name: 'Chromebooks',
    description: 'Chromebook-specific top-row keyboard keys and hardware shortcuts unique to ChromeOS devices.',
    os: ['ChromeOS'],
    category: 'os',
    color: '#34a853',
    shortcuts: {
      'Top Row Hardware Keys': [
        { action: 'Escape', chromeos: 'Esc' },
        { action: 'Back (Previous Page)', chromeos: 'Back key' },
        { action: 'Forward (Next Page)', chromeos: 'Forward key' },
        { action: 'Reload Current Page', chromeos: 'Refresh key' },
        { action: 'Full Screen', chromeos: 'F4 key' },
        { action: 'Show All Windows', chromeos: 'Show Windows key' },
        { action: 'Decrease Brightness', chromeos: 'Brightness Down key' },
        { action: 'Increase Brightness', chromeos: 'Brightness Up key' },
        { action: 'Mute', chromeos: 'Mute key' },
        { action: 'Decrease Volume', chromeos: 'Volume Down key' },
        { action: 'Increase Volume', chromeos: 'Volume Up key' },
        { action: 'Search / Launcher', chromeos: 'Search key' }
      ],
      'Function Keys (F1-F12)': [
        { action: 'Press F1', chromeos: 'Search+Back' },
        { action: 'Press F2', chromeos: 'Search+Forward' },
        { action: 'Press F3', chromeos: 'Search+Refresh' },
        { action: 'Press F4', chromeos: 'Search+F4' },
        { action: 'Press F5', chromeos: 'Search+Show Windows' },
        { action: 'Press F6-F10', chromeos: 'Search+top row keys' },
        { action: 'Treat Top Row as F Keys', chromeos: 'Settings > Keyboard toggle' }
      ],
      'Touchpad Gestures': [
        { action: 'Left-click', chromeos: 'Tap or single press' },
        { action: 'Right-click', chromeos: 'Two-finger tap' },
        { action: 'Scroll', chromeos: 'Two-finger swipe' },
        { action: 'Go Back/Forward', chromeos: 'Two-finger swipe left/right' },
        { action: 'Switch Tabs', chromeos: 'Three-finger swipe left/right' },
        { action: 'Show All Windows', chromeos: 'Three-finger swipe up' },
        { action: 'Show Desktop', chromeos: 'Three-finger swipe down' },
        { action: 'Drag and Drop', chromeos: 'Tap-hold + drag' },
        { action: 'Middle-click', chromeos: 'Three-finger tap' }
      ],
      'Screen & Power': [
        { action: 'Screenshot (full)', chromeos: 'Ctrl+Show Windows' },
        { action: 'Screenshot (partial)', chromeos: 'Shift+Ctrl+Show Windows' },
        { action: 'Screenshot (tablet)', chromeos: 'Power+Volume Down' },
        { action: 'Lock Screen', chromeos: 'Search+L' }
      ]
    }
  },

  // ============ UTILITIES & TOOLS ============
  {
    id: 'neovim',
    name: 'Neovim',
    description: 'A modern, extensible fork of Vim designed for improved maintainability, plugin architecture, and built-in LSP support.',
    os: ['Windows', 'macOS', 'Linux'],
    category: 'utility',
    color: '#57a143',
    shortcuts: {
      'Modes & Basic Motion': [
        { action: 'Enter Normal Mode', keys: 'Esc or Ctrl+[' },
        { action: 'Insert Mode (before cursor)', keys: 'i' },
        { action: 'Insert Mode (after cursor)', keys: 'a' },
        { action: 'Insert Mode (beginning of line)', keys: 'I' },
        { action: 'Insert Mode (end of line)', keys: 'A' },
        { action: 'Insert Mode (new line below)', keys: 'o' },
        { action: 'Insert Mode (new line above)', keys: 'O' },
        { action: 'Visual Mode (character)', keys: 'v' },
        { action: 'Visual Mode (line)', keys: 'V' },
        { action: 'Visual Mode (block)', keys: 'Ctrl+V' },
        { action: 'Command-Line Mode', keys: ':' },
        { action: 'Move Left/Down/Up/Right', keys: 'h / j / k / l' },
        { action: 'Move to Beginning of Line', keys: '0' },
        { action: 'Move to First Non-Whitespace', keys: '^' },
        { action: 'Move to End of Line', keys: '$' },
        { action: 'Move Forward by Word', keys: 'w' },
        { action: 'Move Backward by Word', keys: 'b' },
        { action: 'Go to Line [n]', keys: '[n]G or :[n]' },
        { action: 'Go to First Line', keys: 'gg' },
        { action: 'Go to Last Line', keys: 'G' },
        { action: 'Matching Bracket', keys: '%' },
        { action: 'Scroll Half Page', keys: 'Ctrl+U / Ctrl+D' },
        { action: 'Center Cursor', keys: 'zz' }
      ],
      'Editing & Changes': [
        { action: 'Undo', keys: 'u' },
        { action: 'Redo', keys: 'Ctrl+R' },
        { action: 'Repeat Last Change', keys: '.' },
        { action: 'Delete Character Under Cursor', keys: 'x' },
        { action: 'Delete (Cut) Entire Line', keys: 'dd' },
        { action: 'Delete to End of Line', keys: 'D' },
        { action: 'Change Word', keys: 'cw' },
        { action: 'Change Entire Line', keys: 'cc' },
        { action: 'Change to End of Line', keys: 'C' },
        { action: 'Substitute Character', keys: 's' },
        { action: 'Replace Single Character', keys: 'r' },
        { action: 'Replace Mode', keys: 'R' },
        { action: 'Join Lines', keys: 'J' },
        { action: 'Yank (Copy) Line', keys: 'yy' },
        { action: 'Paste After Cursor', keys: 'p' },
        { action: 'Paste Before Cursor', keys: 'P' },
        { action: 'Indent Line', keys: '>> / <<' },
        { action: 'Auto-Indent Line', keys: '==' }
      ],
      'Search & Navigation': [
        { action: 'Search Forward', keys: '/pattern' },
        { action: 'Search Backward', keys: '?pattern' },
        { action: 'Find Next', keys: 'n' },
        { action: 'Find Previous', keys: 'N' },
        { action: 'Find Char on Line (fwd)', keys: 'f{char}' },
        { action: 'Find Char on Line (bwd)', keys: 'F{char}' },
        { action: 'Till Character', keys: 't{char}' },
        { action: 'Go to Definition (LSP)', keys: 'gd' },
        { action: 'Go to References (LSP)', keys: 'gr' },
        { action: 'Open File Under Cursor', keys: 'gf' },
        { action: 'Jump to Previous Position', keys: 'Ctrl+O' },
        { action: 'Jump Forward', keys: 'Ctrl+I' }
      ],
      'Windows, Tabs & Buffers': [
        { action: 'Split Horizontally', keys: ':split or Ctrl+W s' },
        { action: 'Split Vertically', keys: ':vsplit or Ctrl+W v' },
        { action: 'Navigate Windows', keys: 'Ctrl+W h/j/k/l' },
        { action: 'Close Current Window', keys: 'Ctrl+W q' },
        { action: 'Close Other Windows', keys: 'Ctrl+W o' },
        { action: 'New Tab', keys: ':tabnew' },
        { action: 'Next/Previous Tab', keys: 'gt / gT' },
        { action: 'Next/Previous Buffer', keys: ':bn / :bp' },
        { action: 'List Buffers', keys: ':ls' },
        { action: 'Delete Buffer', keys: ':bd' }
      ],
      'Neovim-Specific': [
        { action: 'File Explorer', keys: ':Explore or :Neotree' },
        { action: 'Toggle Terminal', keys: ':terminal' },
        { action: 'Exit Terminal to Normal', keys: 'Ctrl+\\ Ctrl+N' },
        { action: 'LSP Hover Docs', keys: 'K' },
        { action: 'LSP Code Actions', keys: '<leader>ca' },
        { action: 'LSP Rename Symbol', keys: '<leader>rn' },
        { action: 'Format Document', keys: 'gq or <leader>f' },
        { action: 'Diagnostic Next/Prev', keys: ']d / [d' },
        { action: 'Telescope Find Files', keys: '<leader>ff' },
        { action: 'Telescope Live Grep', keys: '<leader>fg' }
      ]
    }
  },
  {
    id: 'vim',
    name: 'Vim',
    description: 'Highly configurable text editor built to enable efficient text editing, the classic predecessor and inspiration for Neovim.',
    os: ['Windows', 'macOS', 'Linux'],
    category: 'utility',
    color: '#019733',
    shortcuts: {
      'Modes & Basic Motion': [
        { action: 'Enter Normal Mode', keys: 'Esc or Ctrl+[' },
        { action: 'Insert Mode (before cursor)', keys: 'i' },
        { action: 'Insert Mode (after cursor)', keys: 'a' },
        { action: 'Insert Mode (beginning of line)', keys: 'I' },
        { action: 'Insert Mode (end of line)', keys: 'A' },
        { action: 'Insert Mode (new line below/above)', keys: 'o / O' },
        { action: 'Visual Mode (char/line/block)', keys: 'v / V / Ctrl+V' },
        { action: 'Command-Line Mode', keys: ':' },
        { action: 'Move Left/Down/Up/Right', keys: 'h / j / k / l' },
        { action: 'Move to Beginning of Line', keys: '0 / ^' },
        { action: 'Move to End of Line', keys: '$' },
        { action: 'Move Forward by Word', keys: 'w / e' },
        { action: 'Move Backward by Word', keys: 'b' },
        { action: 'Go to Line [n]', keys: '[n]G or :[n]' },
        { action: 'Go to First Line', keys: 'gg' },
        { action: 'Matching Bracket', keys: '%' },
        { action: 'Scroll Pages', keys: 'Ctrl+U/D, Ctrl+B/F' },
        { action: 'Center Cursor/Top/Bottom', keys: 'zz / zt / zb' }
      ],
      'Editing & Changes': [
        { action: 'Undo / Redo', keys: 'u / Ctrl+R' },
        { action: 'Repeat Last Change', keys: '.' },
        { action: 'Delete Char (under/before)', keys: 'x / X' },
        { action: 'Delete (Cut) Line', keys: 'dd' },
        { action: 'Delete to End of Line', keys: 'D' },
        { action: 'Change Word / Line', keys: 'cw / cc' },
        { action: 'Change to End of Line', keys: 'C' },
        { action: 'Substitute Char / Line', keys: 's / S' },
        { action: 'Replace Char / Replace Mode', keys: 'r / R' },
        { action: 'Join Lines', keys: 'J' },
        { action: 'Yank (Copy) Line', keys: 'yy' },
        { action: 'Paste After / Before', keys: 'p / P' },
        { action: 'Indent Right / Left', keys: '>> / <<' },
        { action: 'Auto-Indent Line', keys: '==' },
        { action: 'Change Case', keys: '~ / gU / gu' },
        { action: 'Record Macro', keys: 'q{reg} ... q / @{reg}' }
      ],
      'Search & Navigation': [
        { action: 'Search Forward / Backward', keys: '/pattern / ?pattern' },
        { action: 'Find Next / Previous', keys: 'n / N' },
        { action: 'Find Char on Line (f/t/F/T)', keys: 'f{char} / t{char}' },
        { action: 'Repeat f/t (fwd/bwd)', keys: '; / ,' },
        { action: 'Go to Definition (tags)', keys: 'Ctrl+]' },
        { action: 'Tag Stack Back/Forward', keys: 'Ctrl+T / Ctrl+O' },
        { action: 'Open File Under Cursor', keys: 'gf' },
        { action: 'Word Under Cursor', keys: '* (fwd) / # (bwd)' }
      ],
      'Text Objects & Motions': [
        { action: 'Inner Word', keys: 'iw' },
        { action: 'Inner Parentheses', keys: 'i) / i] / i}' },
        { action: 'Inner Quote', keys: "i' / i\" / i`" },
        { action: 'Inner Tag (HTML/XML)', keys: 'it' },
        { action: 'A Word', keys: 'aw' },
        { action: 'A Parentheses/Brackets', keys: 'a) / a] / a}' },
        { action: 'A Sentence / Paragraph', keys: 'as / ap' },
        { action: 'Delete Inside Word', keys: 'diw' },
        { action: 'Change Inside Quotes', keys: "ci\"" },
        { action: 'Yank Inside Object', keys: 'yiw' },
        { action: 'Visual Select Inside', keys: 'viw' }
      ],
      'Windows, Tabs & Buffers': [
        { action: 'Split Horizontally', keys: ':split or Ctrl+W s' },
        { action: 'Split Vertically', keys: ':vsplit or Ctrl+W v' },
        { action: 'Navigate Windows', keys: 'Ctrl+W h/j/k/l' },
        { action: 'Close Window', keys: ':q or Ctrl+W q' },
        { action: 'Only Current Window', keys: 'Ctrl+W o' },
        { action: 'Equalize Windows', keys: 'Ctrl+W =' },
        { action: 'New Tab', keys: ':tabnew' },
        { action: 'Next/Previous Tab', keys: 'gt / gT' },
        { action: 'Go to Buffer [n]', keys: ':b[n]' },
        { action: 'Next/Previous Buffer', keys: ':bn / :bp' }
      ],
      'Files & Ex Commands': [
        { action: 'Save (Write)', keys: ':w' },
        { action: 'Save and Quit', keys: ':wq or :x' },
        { action: 'Quit', keys: ':q' },
        { action: 'Quit Without Saving', keys: ':q!' },
        { action: 'Save As', keys: ':w filename' },
        { action: 'Edit (Open) File', keys: ':e filename' },
        { action: 'Reload Current File', keys: ':e!' },
        { action: 'Shell Command', keys: ':!command' },
        { action: 'Help', keys: ':help topic' },
        { action: 'Set Option', keys: ':set option' },
        { action: 'Find & Replace', keys: ':%s/old/new/g' },
        { action: 'Global Command', keys: ':g/pattern/command' }
      ]
    }
  },
  {
    id: 'visual-studio-code',
    name: 'Visual Studio Code',
    description: "Microsoft's free, open-source code editor with built-in Git, debugging, extensions, and IntelliSense.",
    os: ['Windows', 'macOS', 'Linux'],
    category: 'utility',
    color: '#007acc',
    shortcuts: {
      'General & File Operations': [
        { action: 'New File', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'Open File', windows: 'Ctrl+O', mac: 'Cmd+O' },
        { action: 'Save', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Save As', windows: 'Ctrl+Shift+S', mac: 'Cmd+Shift+S' },
        { action: 'Close Tab', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Reopen Closed Tab', windows: 'Ctrl+Shift+T', mac: 'Cmd+Shift+T' },
        { action: 'Open Settings', windows: 'Ctrl+,', mac: 'Cmd+,' },
        { action: 'Open Keyboard Shortcuts', windows: 'Ctrl+K Ctrl+S', mac: 'Cmd+K Cmd+S' },
        { action: 'Toggle Full Screen', windows: 'F11', mac: 'Ctrl+Cmd+F' },
        { action: 'Zen Mode', windows: 'Ctrl+K Z', mac: 'Cmd+K Z' }
      ],
      'Editing Basics': [
        { action: 'Cut Line', windows: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Copy Line', windows: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Paste', windows: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Undo', windows: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows: 'Ctrl+Y', mac: 'Cmd+Y' },
        { action: 'Find', windows: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Replace', windows: 'Ctrl+H', mac: 'Cmd+H' },
        { action: 'Find in Files', windows: 'Ctrl+Shift+F', mac: 'Cmd+Shift+F' },
        { action: 'Move Line Up/Down', windows: 'Alt+Up/Down', mac: 'Opt+Up/Down' },
        { action: 'Copy Line Up/Down', windows: 'Shift+Alt+Up/Down', mac: 'Shift+Opt+Up/Down' },
        { action: 'Toggle Comment', windows: 'Ctrl+/', mac: 'Cmd+/' },
        { action: 'Toggle Block Comment', windows: 'Shift+Alt+A', mac: 'Shift+Opt+A' },
        { action: 'Format Document', windows: 'Shift+Alt+F', mac: 'Shift+Opt+F' }
      ],
      'Cursor & Selection': [
        { action: 'Select All', windows: 'Ctrl+A', mac: 'Cmd+A' },
        { action: 'Expand/Shrink Selection', windows: 'Ctrl+Shift+Right/Left', mac: 'Ctrl+Shift+Right/Left' },
        { action: 'Add Cursor Above/Below', windows: 'Ctrl+Alt+Up/Down', mac: 'Cmd+Opt+Up/Down' },
        { action: 'Add Cursor at Click', windows: 'Alt+Click', mac: 'Opt+Click' },
        { action: 'Add Next Match to Selection', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Select All Occurrences', windows: 'Ctrl+Shift+L', mac: 'Cmd+Shift+L' },
        { action: 'Select Current Line', windows: 'Ctrl+L', mac: 'Cmd+L' },
        { action: 'Column (Box) Selection', windows: 'Shift+Alt+drag', mac: 'Shift+Opt+drag' }
      ],
      'Navigation': [
        { action: 'Quick Open File', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Go to Symbol in File', windows: 'Ctrl+Shift+O', mac: 'Cmd+Shift+O' },
        { action: 'Go to Symbol in Workspace', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Go to Line', windows: 'Ctrl+G', mac: 'Ctrl+G' },
        { action: 'Go to Definition', windows: 'F12', mac: 'F12' },
        { action: 'Peek Definition', windows: 'Alt+F12', mac: 'Opt+F12' },
        { action: 'Go to References', windows: 'Shift+F12', mac: 'Shift+F12' },
        { action: 'Go Back/Forward', windows: 'Ctrl+Alt+-', mac: 'Ctrl+-' },
        { action: 'Next/Previous Error', windows: 'F8 / Shift+F8', mac: 'F8 / Shift+F8' },
        { action: 'Switch Between Tabs', windows: 'Ctrl+Tab', mac: 'Cmd+Tab' }
      ],
      'Editor & Layout': [
        { action: 'Toggle Sidebar', windows: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Show Explorer', windows: 'Ctrl+Shift+E', mac: 'Cmd+Shift+E' },
        { action: 'Show Search', windows: 'Ctrl+Shift+F', mac: 'Cmd+Shift+F' },
        { action: 'Show Source Control', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' },
        { action: 'Show Extensions', windows: 'Ctrl+Shift+X', mac: 'Cmd+Shift+X' },
        { action: 'Show Debug', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Open Terminal', windows: 'Ctrl+\u0060', mac: 'Ctrl+\u0060' },
        { action: 'New Terminal', windows: 'Ctrl+Shift+\u0060', mac: 'Ctrl+Shift+\u0060' },
        { action: 'Split Editor', windows: 'Ctrl+\\', mac: 'Cmd+\\' },
        { action: 'Toggle Panel', windows: 'Ctrl+J', mac: 'Cmd+J' },
        { action: 'Navigate Editor Groups', windows: 'Ctrl+1/2/3', mac: 'Cmd+1/2/3' }
      ],
      'IntelliSense, Code & Debug': [
        { action: 'Trigger Suggestion', windows: 'Ctrl+Space', mac: 'Ctrl+Space' },
        { action: 'Parameter Hints', windows: 'Ctrl+Shift+Space', mac: 'Cmd+Shift+Space' },
        { action: 'Quick Fix', windows: 'Ctrl+.', mac: 'Cmd+.' },
        { action: 'Rename Symbol', windows: 'F2', mac: 'F2' },
        { action: 'Organize Imports', windows: 'Shift+Alt+O', mac: 'Shift+Opt+O' },
        { action: 'Toggle Breakpoint', windows: 'F9', mac: 'F9' },
        { action: 'Start Debugging', windows: 'F5', mac: 'F5' },
        { action: 'Stop Debugging', windows: 'Shift+F5', mac: 'Shift+F5' },
        { action: 'Step Over', windows: 'F10', mac: 'F10' },
        { action: 'Step Into', windows: 'F11', mac: 'F11' },
        { action: 'Step Out', windows: 'Shift+F11', mac: 'Shift+F11' },
        { action: 'Command Palette', windows: 'Ctrl+Shift+P or F1', mac: 'Cmd+Shift+P or F1' },
        { action: 'Preview Markdown', windows: 'Ctrl+Shift+V', mac: 'Cmd+Shift+V' }
      ]
    }
  },

  // ============ WEB BROWSERS ============
  {
    id: 'chrome',
    name: 'Google Chrome',
    description: "Google's fast, secure web browser with a vast extension ecosystem, available across all major platforms.",
    os: ['Windows', 'macOS', 'Linux'],
    category: 'browsers',
    color: '#4285f4',
    shortcuts: {
      'Tab & Window Management': [
        { action: 'New Tab', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Reopen Closed Tab', windows: 'Ctrl+Shift+T', mac: 'Cmd+Shift+T' },
        { action: 'Close Tab', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Switch to Tab (1-8)', windows: 'Ctrl+1 through Ctrl+8', mac: 'Cmd+1 through Cmd+8' },
        { action: 'Go to Last Tab', windows: 'Ctrl+9', mac: 'Cmd+9' },
        { action: 'Next Tab', windows: 'Ctrl+Tab', mac: 'Cmd+Opt+Right' },
        { action: 'Previous Tab', windows: 'Ctrl+Shift+Tab', mac: 'Cmd+Opt+Left' },
        { action: 'New Window', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'New Incognito Window', windows: 'Ctrl+Shift+N', mac: 'Cmd+Shift+N' },
        { action: 'Close Window', windows: 'Ctrl+Shift+W', mac: 'Cmd+Shift+W' },
        { action: 'Pin/Unpin Tab', windows: 'Right-click tab > Pin', mac: 'Right-click tab > Pin' },
        { action: 'Move Tab Left/Right', windows: 'Ctrl+Shift+PgUp/PgDn', mac: 'Cmd+Shift+Left/Right' }
      ],
      'Navigation': [
        { action: 'Back', windows: 'Alt+Left', mac: 'Cmd+[ or Cmd+Left' },
        { action: 'Forward', windows: 'Alt+Right', mac: 'Cmd+] or Cmd+Right' },
        { action: 'Reload', windows: 'Ctrl+R or F5', mac: 'Cmd+R' },
        { action: 'Hard Reload (no cache)', windows: 'Ctrl+Shift+R', mac: 'Cmd+Shift+R' },
        { action: 'Stop Loading', windows: 'Esc', mac: 'Esc' },
        { action: 'Go to Address Bar', windows: 'Ctrl+L or Alt+D', mac: 'Cmd+L' },
        { action: 'Open Homepage', windows: 'Alt+Home', mac: 'Cmd+Shift+H' }
      ],
      'Page & Content': [
        { action: 'Find on Page', windows: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find Next', windows: 'Ctrl+G', mac: 'Cmd+G' },
        { action: 'Find Previous', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' },
        { action: 'Zoom In', windows: 'Ctrl++', mac: 'Cmd++' },
        { action: 'Zoom Out', windows: 'Ctrl+-', mac: 'Cmd+-' },
        { action: 'Reset Zoom', windows: 'Ctrl+0', mac: 'Cmd+0' },
        { action: 'Full Screen', windows: 'F11', mac: 'Ctrl+Cmd+F' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Save Page As', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Scroll Down a Screen', windows: 'Spacebar', mac: 'Spacebar' },
        { action: 'Scroll Up a Screen', windows: 'Shift+Spacebar', mac: 'Shift+Spacebar' },
        { action: 'Go to Top of Page', windows: 'Home', mac: 'Cmd+Up' },
        { action: 'Go to Bottom of Page', windows: 'End', mac: 'Cmd+Down' }
      ],
      'Bookmarks & History': [
        { action: 'Bookmark This Page', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Bookmark All Open Tabs', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Open Bookmarks Manager', windows: 'Ctrl+Shift+O', mac: 'Cmd+Opt+B' },
        { action: 'Toggle Bookmarks Bar', windows: 'Ctrl+Shift+B', mac: 'Cmd+Shift+B' },
        { action: 'Open History', windows: 'Ctrl+H', mac: 'Cmd+Y' },
        { action: 'Open Downloads', windows: 'Ctrl+J', mac: 'Cmd+Shift+J' },
        { action: 'Clear Browsing Data', windows: 'Ctrl+Shift+Delete', mac: 'Cmd+Shift+Delete' }
      ],
      'Developer Tools': [
        { action: 'Toggle DevTools', windows: 'Ctrl+Shift+I or F12', mac: 'Cmd+Opt+I' },
        { action: 'DevTools Console', windows: 'Ctrl+Shift+J', mac: 'Cmd+Opt+J' },
        { action: 'Inspect Element', windows: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' },
        { action: 'View Page Source', windows: 'Ctrl+U', mac: 'Cmd+Opt+U' },
        { action: 'Task Manager (Chrome)', windows: 'Shift+Esc', mac: 'Shift+Esc' },
        { action: 'Open Chrome Menu', windows: 'Alt+F or Alt+E', mac: 'Cmd+Shift+M' }
      ]
    }
  },
  {
    id: 'edge',
    name: 'Microsoft Edge',
    description: "Microsoft's Chromium-based browser with deep Windows integration, AI-powered Copilot sidebar, and enterprise features.",
    os: ['Windows', 'macOS'],
    category: 'browsers',
    color: '#0078d4',
    shortcuts: {
      'Tab & Window Management': [
        { action: 'New Tab', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Reopen Closed Tab', windows: 'Ctrl+Shift+T', mac: 'Cmd+Shift+T' },
        { action: 'Close Tab', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Switch to Tab (1-8)', windows: 'Ctrl+1 through Ctrl+8', mac: 'Cmd+1 through Cmd+8' },
        { action: 'Go to Last Tab', windows: 'Ctrl+9', mac: 'Cmd+9' },
        { action: 'Next Tab', windows: 'Ctrl+Tab', mac: 'Cmd+Opt+Right' },
        { action: 'Previous Tab', windows: 'Ctrl+Shift+Tab', mac: 'Cmd+Opt+Left' },
        { action: 'New Window', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'New InPrivate Window', windows: 'Ctrl+Shift+N', mac: 'Cmd+Shift+N' },
        { action: 'Close Window', windows: 'Ctrl+Shift+W', mac: 'Cmd+Shift+W' },
        { action: 'Pin/Unpin Tab', windows: 'Right-click tab > Pin tab', mac: 'Right-click tab > Pin tab' },
        { action: 'Mute/Unmute Tab', windows: 'Ctrl+M (on active tab)', mac: 'Cmd+M' }
      ],
      'Navigation': [
        { action: 'Back', windows: 'Alt+Left', mac: 'Cmd+[' },
        { action: 'Forward', windows: 'Alt+Right', mac: 'Cmd+]' },
        { action: 'Reload', windows: 'Ctrl+R or F5', mac: 'Cmd+R' },
        { action: 'Hard Reload (no cache)', windows: 'Ctrl+Shift+R', mac: 'Cmd+Shift+R' },
        { action: 'Stop Loading', windows: 'Esc', mac: 'Esc' },
        { action: 'Go to Address Bar', windows: 'Ctrl+L or Alt+D', mac: 'Cmd+L' },
        { action: 'Open Homepage', windows: 'Alt+Home', mac: 'Cmd+Shift+H' }
      ],
      'Page & Content': [
        { action: 'Find on Page', windows: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find Next', windows: 'Ctrl+G', mac: 'Cmd+G' },
        { action: 'Find Previous', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' },
        { action: 'Zoom In', windows: 'Ctrl++', mac: 'Cmd++' },
        { action: 'Zoom Out', windows: 'Ctrl+-', mac: 'Cmd+-' },
        { action: 'Reset Zoom', windows: 'Ctrl+0', mac: 'Cmd+0' },
        { action: 'Full Screen', windows: 'F11', mac: 'Ctrl+Cmd+F' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Save Page As', windows: 'Ctrl+S', mac: 'Cmd+S' }
      ],
      'Collections & Features': [
        { action: 'Add to Collections', windows: 'Ctrl+Shift+Y', mac: 'Cmd+Shift+Y' },
        { action: 'Open Copilot Sidebar', windows: 'Ctrl+Shift+.', mac: 'Cmd+Shift+.' },
        { action: 'Bookmark This Page', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Open Favorites', windows: 'Ctrl+Shift+O', mac: 'Cmd+Opt+B' },
        { action: 'Toggle Favorites Bar', windows: 'Ctrl+Shift+B', mac: 'Cmd+Shift+B' },
        { action: 'Open History', windows: 'Ctrl+H', mac: 'Cmd+Y' },
        { action: 'Open Downloads', windows: 'Ctrl+J', mac: 'Cmd+Shift+J' },
        { action: 'Clear Browsing Data', windows: 'Ctrl+Shift+Delete', mac: 'Cmd+Shift+Delete' },
        { action: 'Web Capture (Screenshot)', windows: 'Ctrl+Shift+S', mac: 'Cmd+Shift+S' },
        { action: 'Read Aloud', windows: 'Ctrl+Shift+U', mac: 'Cmd+Shift+U' }
      ],
      'Developer Tools': [
        { action: 'Toggle DevTools', windows: 'Ctrl+Shift+I or F12', mac: 'Cmd+Opt+I' },
        { action: 'DevTools Console', windows: 'Ctrl+Shift+J', mac: 'Cmd+Opt+J' },
        { action: 'Inspect Element', windows: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' },
        { action: 'View Page Source', windows: 'Ctrl+U', mac: 'Cmd+Opt+U' },
        { action: 'Browser Task Manager', windows: 'Shift+Esc', mac: 'Shift+Esc' }
      ]
    }
  },
  {
    id: 'firefox',
    name: 'Mozilla Firefox',
    description: "Privacy-respecting, open-source web browser by Mozilla with powerful developer tools and extensive customization.",
    os: ['Windows', 'macOS', 'Linux'],
    category: 'browsers',
    color: '#ff6611',
    shortcuts: {
      'Tab & Window Management': [
        { action: 'New Tab', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Reopen Closed Tab', windows: 'Ctrl+Shift+T', mac: 'Cmd+Shift+T' },
        { action: 'Close Tab', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Switch to Tab (1-8)', windows: 'Ctrl+1 through Ctrl+8', mac: 'Cmd+1 through Cmd+8' },
        { action: 'Go to Last Tab', windows: 'Ctrl+9', mac: 'Cmd+9' },
        { action: 'Next Tab', windows: 'Ctrl+Tab', mac: 'Ctrl+Tab' },
        { action: 'Previous Tab', windows: 'Ctrl+Shift+Tab', mac: 'Ctrl+Shift+Tab' },
        { action: 'New Window', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'New Private Window', windows: 'Ctrl+Shift+P', mac: 'Cmd+Shift+P' },
        { action: 'Close Window', windows: 'Ctrl+Shift+W', mac: 'Cmd+Shift+W' },
        { action: 'Pin/Unpin Tab', windows: 'Right-click tab > Pin Tab', mac: 'Right-click tab > Pin Tab' },
        { action: 'Mute/Unmute Tab', windows: 'Ctrl+M', mac: 'Ctrl+M' }
      ],
      'Navigation': [
        { action: 'Back', windows: 'Alt+Left', mac: 'Cmd+Left' },
        { action: 'Forward', windows: 'Alt+Right', mac: 'Cmd+Right' },
        { action: 'Reload', windows: 'Ctrl+R or F5', mac: 'Cmd+R' },
        { action: 'Hard Reload (no cache)', windows: 'Ctrl+Shift+R', mac: 'Cmd+Shift+R' },
        { action: 'Stop Loading', windows: 'Esc', mac: 'Esc' },
        { action: 'Go to Address Bar', windows: 'Ctrl+L or Alt+D', mac: 'Cmd+L' },
        { action: 'Open Homepage', windows: 'Alt+Home', mac: 'Opt+Home' }
      ],
      'Page & Content': [
        { action: 'Find on Page', windows: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find Again', windows: 'Ctrl+G or F3', mac: 'Cmd+G' },
        { action: 'Quick Find (search links)', windows: "'", mac: "'" },
        { action: 'Zoom In', windows: 'Ctrl++', mac: 'Cmd++' },
        { action: 'Zoom Out', windows: 'Ctrl+-', mac: 'Cmd+-' },
        { action: 'Reset Zoom', windows: 'Ctrl+0', mac: 'Cmd+0' },
        { action: 'Full Screen', windows: 'F11', mac: 'Cmd+Shift+F' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Save Page As', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Reader View', windows: 'F9', mac: 'Cmd+Opt+R' }
      ],
      'Bookmarks & History': [
        { action: 'Bookmark This Page', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Bookmark All Tabs', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Open Library (Bookmarks)', windows: 'Ctrl+Shift+O', mac: 'Cmd+Shift+O' },
        { action: 'Toggle Bookmarks Toolbar', windows: 'Ctrl+Shift+B', mac: 'Cmd+Shift+B' },
        { action: 'Open History Sidebar', windows: 'Ctrl+H', mac: 'Cmd+Shift+H' },
        { action: 'Open Downloads', windows: 'Ctrl+J', mac: 'Cmd+J' },
        { action: 'Clear Recent History', windows: 'Ctrl+Shift+Delete', mac: 'Cmd+Shift+Delete' }
      ],
      'Developer Tools': [
        { action: 'Toggle DevTools', windows: 'Ctrl+Shift+I or F12', mac: 'Cmd+Opt+I' },
        { action: 'Web Console', windows: 'Ctrl+Shift+K', mac: 'Cmd+Opt+K' },
        { action: 'Inspect Element', windows: 'Ctrl+Shift+C', mac: 'Cmd+Opt+C' },
        { action: 'Debugger', windows: 'Ctrl+Shift+Z', mac: 'Cmd+Opt+Z' },
        { action: 'View Page Source', windows: 'Ctrl+U', mac: 'Cmd+U' },
        { action: 'Responsive Design Mode', windows: 'Ctrl+Shift+M', mac: 'Cmd+Opt+M' },
        { action: 'Page Info', windows: 'Ctrl+I', mac: 'Cmd+I' }
      ]
    }
  },
  {
    id: 'opera',
    name: 'Opera',
    description: "Chromium-based browser with built-in ad blocker, free VPN, crypto wallet, and sidebar messenger integration.",
    os: ['Windows', 'macOS', 'Linux'],
    category: 'browsers',
    color: '#ff1b2d',
    shortcuts: {
      'Tab & Window Management': [
        { action: 'New Tab', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Reopen Closed Tab', windows: 'Ctrl+Shift+T', mac: 'Cmd+Shift+T' },
        { action: 'Close Tab', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Switch to Tab (1-8)', windows: 'Ctrl+1 through Ctrl+8', mac: 'Cmd+1 through Cmd+8' },
        { action: 'Go to Last Tab', windows: 'Ctrl+9', mac: 'Cmd+9' },
        { action: 'Next Tab', windows: 'Ctrl+Tab', mac: 'Ctrl+Tab' },
        { action: 'Previous Tab', windows: 'Ctrl+Shift+Tab', mac: 'Ctrl+Shift+Tab' },
        { action: 'New Window', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'New Private Window', windows: 'Ctrl+Shift+N', mac: 'Cmd+Shift+N' },
        { action: 'Close Window', windows: 'Ctrl+Shift+W', mac: 'Cmd+Shift+W' },
        { action: 'Duplicate Tab', windows: 'Right-click tab > Duplicate', mac: 'Right-click tab > Duplicate' }
      ],
      'Navigation': [
        { action: 'Back', windows: 'Alt+Left', mac: 'Cmd+Left' },
        { action: 'Forward', windows: 'Alt+Right', mac: 'Cmd+Right' },
        { action: 'Reload', windows: 'Ctrl+R or F5', mac: 'Cmd+R' },
        { action: 'Hard Reload (no cache)', windows: 'Ctrl+Shift+R', mac: 'Cmd+Shift+R' },
        { action: 'Stop Loading', windows: 'Esc', mac: 'Esc' },
        { action: 'Go to Address Bar', windows: 'Ctrl+L', mac: 'Cmd+L' }
      ],
      'Page & Content': [
        { action: 'Find on Page', windows: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find Next', windows: 'Ctrl+G', mac: 'Cmd+G' },
        { action: 'Find Previous', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' },
        { action: 'Zoom In', windows: 'Ctrl++', mac: 'Cmd++' },
        { action: 'Zoom Out', windows: 'Ctrl+-', mac: 'Cmd+-' },
        { action: 'Reset Zoom', windows: 'Ctrl+0', mac: 'Cmd+0' },
        { action: 'Full Screen', windows: 'F11', mac: 'Ctrl+Cmd+F' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Save Page As', windows: 'Ctrl+S', mac: 'Cmd+S' }
      ],
      'Opera-Specific Features': [
        { action: 'Toggle Sidebar', windows: 'Ctrl+Shift+S', mac: 'Cmd+Shift+S' },
        { action: 'Open Speed Dial', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Toggle VPN', windows: 'Click VPN badge in address bar', mac: 'Click VPN badge in address bar' },
        { action: 'Toggle Ad Blocker', windows: 'Click shield icon in address bar', mac: 'Click shield icon in address bar' },
        { action: 'Search Tabs', windows: 'Ctrl+Space', mac: 'Cmd+Space' },
        { action: 'Tab Menu', windows: 'Right-click tab bar', mac: 'Right-click tab bar' },
        { action: 'Workspaces', windows: 'Sidebar > Workspaces', mac: 'Sidebar > Workspaces' },
        { action: 'My Flow (send to phone)', windows: 'Click paper plane in sidebar', mac: 'Click paper plane in sidebar' }
      ],
      'Bookmarks & History': [
        { action: 'Bookmark This Page', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Open Bookmarks', windows: 'Ctrl+Shift+O', mac: 'Cmd+Opt+B' },
        { action: 'Toggle Bookmarks Bar', windows: 'Ctrl+Shift+B', mac: 'Cmd+Shift+B' },
        { action: 'Open History', windows: 'Ctrl+H', mac: 'Cmd+Shift+H' },
        { action: 'Open Downloads', windows: 'Ctrl+J', mac: 'Cmd+Shift+J' },
        { action: 'Clear Browsing Data', windows: 'Ctrl+Shift+Delete', mac: 'Cmd+Shift+Delete' }
      ],
      'Developer Tools': [
        { action: 'Toggle DevTools', windows: 'Ctrl+Shift+I', mac: 'Cmd+Opt+I' },
        { action: 'DevTools Console', windows: 'Ctrl+Shift+J', mac: 'Cmd+Opt+J' },
        { action: 'Inspect Element', windows: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' },
        { action: 'View Page Source', windows: 'Ctrl+U', mac: 'Cmd+Opt+U' }
      ]
    }
  },
  {
    id: 'safari',
    name: 'Apple Safari',
    description: "Apple's native web browser for macOS and iOS, optimized for battery life, performance, and Apple ecosystem integration.",
    os: ['macOS'],
    category: 'browsers',
    color: '#0066cc',
    shortcuts: {
      'Tab & Window Management': [
        { action: 'New Tab', mac: 'Cmd+T' },
        { action: 'Reopen Closed Tab', mac: 'Cmd+Shift+T' },
        { action: 'Close Tab', mac: 'Cmd+W' },
        { action: 'Switch to Tab (1-9)', mac: 'Cmd+1 through Cmd+9' },
        { action: 'Next Tab', mac: 'Ctrl+Tab or Cmd+Shift+Right' },
        { action: 'Previous Tab', mac: 'Ctrl+Shift+Tab or Cmd+Shift+Left' },
        { action: 'New Window', mac: 'Cmd+N' },
        { action: 'New Private Window', mac: 'Cmd+Shift+N' },
        { action: 'Close Window', mac: 'Cmd+Shift+W' },
        { action: 'Pin Tab', mac: 'Right-click tab > Pin Tab' },
        { action: 'Show All Tabs (Overview)', mac: 'Cmd+Shift+\\' },
        { action: 'Move Tab to New Window', mac: 'Drag tab out of window' }
      ],
      'Navigation': [
        { action: 'Back', mac: 'Cmd+[ or Cmd+Left' },
        { action: 'Forward', mac: 'Cmd+] or Cmd+Right' },
        { action: 'Reload', mac: 'Cmd+R' },
        { action: 'Hard Reload (no cache)', mac: 'Cmd+Opt+R' },
        { action: 'Stop Loading', mac: 'Esc or Cmd+.' },
        { action: 'Go to Address Bar', mac: 'Cmd+L' },
        { action: 'Open Homepage', mac: 'Cmd+Shift+H' },
        { action: 'Quick Website Search', mac: 'Cmd+Opt+F' }
      ],
      'Page & Content': [
        { action: 'Find on Page', mac: 'Cmd+F' },
        { action: 'Find Next', mac: 'Cmd+G' },
        { action: 'Find Previous', mac: 'Cmd+Shift+G' },
        { action: 'Zoom In', mac: 'Cmd++' },
        { action: 'Zoom Out', mac: 'Cmd+-' },
        { action: 'Actual Size', mac: 'Cmd+0' },
        { action: 'Full Screen', mac: 'Ctrl+Cmd+F' },
        { action: 'Print', mac: 'Cmd+P' },
        { action: 'Save Page As', mac: 'Cmd+S' },
        { action: 'Enter Reader Mode', mac: 'Cmd+Shift+R' },
        { action: 'Show/Hide Status Bar', mac: 'Cmd+/' },
        { action: 'Scroll Page Down', mac: 'Spacebar' }
      ],
      'Bookmarks & History': [
        { action: 'Add Bookmark', mac: 'Cmd+D' },
        { action: 'Add to Reading List', mac: 'Cmd+Shift+D' },
        { action: 'Show Bookmarks Sidebar', mac: 'Ctrl+Cmd+1' },
        { action: 'Show Reading List Sidebar', mac: 'Ctrl+Cmd+2' },
        { action: 'Toggle Bookmarks Bar', mac: 'Cmd+Shift+B' },
        { action: 'Edit Bookmarks', mac: 'Cmd+Opt+B' },
        { action: 'Show History', mac: 'Cmd+Y' },
        { action: 'Show Downloads', mac: 'Cmd+Opt+L' },
        { action: 'Clear History', mac: 'Cmd+Shift+Delete' },
        { action: 'Add Link to Bookmarks', mac: 'Drag URL to Bookmarks Bar' }
      ],
      'Developer & Advanced': [
        { action: 'Toggle Web Inspector', mac: 'Cmd+Opt+I' },
        { action: 'JavaScript Console', mac: 'Cmd+Opt+C' },
        { action: 'Toggle Responsive Design Mode', mac: 'Cmd+Opt+R' },
        { action: 'View Page Source', mac: 'Cmd+Opt+U' },
        { action: 'Show Page Resources', mac: 'Cmd+Opt+A' },
        { action: 'Empty Caches', mac: 'Cmd+Opt+E' },
        { action: 'Show/Hide Toolbar', mac: 'Cmd+Shift+\\' },
        { action: 'Show/Hide Tab Bar', mac: 'Cmd+Shift+T' },
        { action: 'Show/Hide Favorites Bar', mac: 'Cmd+Shift+B' },
        { action: 'Browse in Private Window', mac: 'Cmd+Shift+N' },
        { action: 'Share', mac: 'Cmd+Shift+I' }
      ],
      'Safari-Only Features': [
        { action: 'Show Top Sites', mac: 'Cmd+Opt+1' },
        { action: 'Show History in Grid', mac: 'Cmd+Opt+2' },
        { action: 'Mail Link to This Page', mac: 'Cmd+Shift+I' },
        { action: 'AutoFill Form', mac: 'Cmd+Shift+A' },
        { action: 'Dismiss Web Notification', mac: 'Opt+Click notification' }
      ]
    }
  },

  // ============ PRODUCTIVITY SOFTWARE ============
  {
    id: 'after-effects',
    name: 'Adobe After Effects',
    description: 'Industry-standard motion graphics and visual effects software for video post-production, compositing, and animation.',
    os: ['Windows', 'macOS'],
    category: 'productivity',
    color: '#9999ff',
    shortcuts: {
      'Project & File Operations': [
        { action: 'New Project', windows: 'Ctrl+Alt+N', mac: 'Cmd+Opt+N' },
        { action: 'New Composition', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'Open Project', windows: 'Ctrl+O', mac: 'Cmd+O' },
        { action: 'Save', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Import File', windows: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Duplicate Layer/Comp', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Precompose Layers', windows: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' }
      ],
      'Editing & Timeline': [
        { action: 'Undo', windows: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows: 'Ctrl+Shift+Z', mac: 'Cmd+Shift+Z' },
        { action: 'Cut', windows: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Copy', windows: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Paste', windows: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Split Layer', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Trim In to CTI', windows: 'Alt+[', mac: 'Opt+[' },
        { action: 'Trim Out to CTI', windows: 'Alt+]', mac: 'Opt+]' },
        { action: 'Move In Point to CTI', windows: '[', mac: '[' },
        { action: 'Move Out Point to CTI', windows: ']', mac: ']' },
        { action: 'Select All', windows: 'Ctrl+A', mac: 'Cmd+A' },
        { action: 'Deselect All', windows: 'F2', mac: 'F2' }
      ],
      'Layer Properties': [
        { action: 'Anchor Point', windows: 'A', mac: 'A' },
        { action: 'Position', windows: 'P', mac: 'P' },
        { action: 'Scale', windows: 'S', mac: 'S' },
        { action: 'Rotation', windows: 'R', mac: 'R' },
        { action: 'Opacity', windows: 'T', mac: 'T' },
        { action: 'Audio', windows: 'L', mac: 'L' },
        { action: 'Masks', windows: 'M', mac: 'M' },
        { action: 'Effects', windows: 'E', mac: 'E' },
        { action: 'Keyframes', windows: 'U', mac: 'U' },
        { action: 'Show All Properties', windows: 'Ctrl+\u0060', mac: 'Cmd+\u0060' }
      ],
      'Navigation & Preview': [
        { action: 'Play/Stop Preview', windows: 'Spacebar', mac: 'Spacebar' },
        { action: 'RAM Preview', windows: '0 (numpad)', mac: '0 (numpad)' },
        { action: 'Go to Beginning', windows: 'Home', mac: 'Home' },
        { action: 'Go to End', windows: 'End', mac: 'End' },
        { action: 'Previous Keyframe', windows: 'J', mac: 'J' },
        { action: 'Next Keyframe', windows: 'K', mac: 'K' },
        { action: 'Frame Forward', windows: 'PgDn', mac: 'PgDn' },
        { action: 'Frame Backward', windows: 'PgUp', mac: 'PgUp' },
        { action: 'Set Work Area Start', windows: 'B', mac: 'B' },
        { action: 'Set Work Area End', windows: 'N', mac: 'N' }
      ],
      'Tools': [
        { action: 'Selection Tool', windows: 'V', mac: 'V' },
        { action: 'Hand Tool', windows: 'H', mac: 'H' },
        { action: 'Rotate Tool', windows: 'W', mac: 'W' },
        { action: 'Pen Tool', windows: 'G', mac: 'G' },
        { action: 'Shape Tool', windows: 'Q', mac: 'Q' },
        { action: 'Camera Tools', windows: 'C', mac: 'C' },
        { action: 'Pan Behind Tool', windows: 'Y', mac: 'Y' },
        { action: 'Brush Tool', windows: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Type Tool', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Zoom In Tool', windows: 'Z', mac: 'Z' }
      ]
    }
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    description: 'Industry-standard raster graphics editor for image manipulation, compositing, digital painting, and graphic design.',
    os: ['Windows', 'macOS'],
    category: 'productivity',
    color: '#31a8ff',
    shortcuts: {
      'File Operations': [
        { action: 'New Document', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'Open', windows: 'Ctrl+O', mac: 'Cmd+O' },
        { action: 'Save', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Save As', windows: 'Ctrl+Shift+S', mac: 'Cmd+Shift+S' },
        { action: 'Export As', windows: 'Ctrl+Alt+Shift+W', mac: 'Cmd+Opt+Shift+W' },
        { action: 'Close', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Exit/Quit', windows: 'Ctrl+Q', mac: 'Cmd+Q' }
      ],
      'Editing & History': [
        { action: 'Undo', windows: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Step Forward (Redo)', windows: 'Ctrl+Shift+Z', mac: 'Cmd+Shift+Z' },
        { action: 'Step Backward', windows: 'Ctrl+Alt+Z', mac: 'Cmd+Opt+Z' },
        { action: 'Cut', windows: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Copy', windows: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Copy Merged', windows: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' },
        { action: 'Paste', windows: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Paste in Place', windows: 'Ctrl+Shift+V', mac: 'Cmd+Shift+V' },
        { action: 'Fill Foreground', windows: 'Alt+Backspace', mac: 'Opt+Delete' },
        { action: 'Fill Background', windows: 'Ctrl+Backspace', mac: 'Cmd+Delete' },
        { action: 'Free Transform', windows: 'Ctrl+T', mac: 'Cmd+T' },
        { action: 'Content-Aware Fill', windows: 'Shift+F5', mac: 'Shift+F5' }
      ],
      'Selections': [
        { action: 'Select All', windows: 'Ctrl+A', mac: 'Cmd+A' },
        { action: 'Deselect', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Reselect', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Inverse Selection', windows: 'Ctrl+Shift+I', mac: 'Cmd+Shift+I' },
        { action: 'Feather Selection', windows: 'Shift+F6', mac: 'Shift+F6' }
      ],
      'Layers': [
        { action: 'New Layer', windows: 'Ctrl+Shift+N', mac: 'Cmd+Shift+N' },
        { action: 'New Layer via Copy', windows: 'Ctrl+J', mac: 'Cmd+J' },
        { action: 'New Layer via Cut', windows: 'Ctrl+Shift+J', mac: 'Cmd+Shift+J' },
        { action: 'Group Layers', windows: 'Ctrl+G', mac: 'Cmd+G' },
        { action: 'Ungroup Layers', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' },
        { action: 'Merge Layers', windows: 'Ctrl+E', mac: 'Cmd+E' },
        { action: 'Merge Visible', windows: 'Ctrl+Shift+E', mac: 'Cmd+Shift+E' },
        { action: 'Create Clipping Mask', windows: 'Ctrl+Alt+G', mac: 'Cmd+Opt+G' }
      ],
      'Tools': [
        { action: 'Move Tool', windows: 'V', mac: 'V' },
        { action: 'Marquee Tool', windows: 'M', mac: 'M' },
        { action: 'Lasso Tool', windows: 'L', mac: 'L' },
        { action: 'Magic Wand / Quick Select', windows: 'W', mac: 'W' },
        { action: 'Crop Tool', windows: 'C', mac: 'C' },
        { action: 'Eyedropper', windows: 'I', mac: 'I' },
        { action: 'Spot Healing / Patch', windows: 'J', mac: 'J' },
        { action: 'Brush Tool', windows: 'B', mac: 'B' },
        { action: 'Clone Stamp', windows: 'S', mac: 'S' },
        { action: 'Eraser Tool', windows: 'E', mac: 'E' },
        { action: 'Gradient / Paint Bucket', windows: 'G', mac: 'G' },
        { action: 'Dodge / Burn / Sponge', windows: 'O', mac: 'O' },
        { action: 'Pen Tool', windows: 'P', mac: 'P' },
        { action: 'Type Tool', windows: 'T', mac: 'T' },
        { action: 'Hand Tool', windows: 'H', mac: 'H' },
        { action: 'Zoom Tool', windows: 'Z', mac: 'Z' }
      ],
      'Image Adjustments & View': [
        { action: 'Levels', windows: 'Ctrl+L', mac: 'Cmd+L' },
        { action: 'Curves', windows: 'Ctrl+M', mac: 'Cmd+M' },
        { action: 'Hue/Saturation', windows: 'Ctrl+U', mac: 'Cmd+U' },
        { action: 'Color Balance', windows: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Desaturate', windows: 'Ctrl+Shift+U', mac: 'Cmd+Shift+U' },
        { action: 'Invert', windows: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Zoom In', windows: 'Ctrl++', mac: 'Cmd++' },
        { action: 'Zoom Out', windows: 'Ctrl+-', mac: 'Cmd+-' },
        { action: 'Fit on Screen', windows: 'Ctrl+0', mac: 'Cmd+0' },
        { action: '100% Zoom', windows: 'Ctrl+1', mac: 'Cmd+1' },
        { action: 'Toggle Rulers', windows: 'Ctrl+R', mac: 'Cmd+R' }
      ]
    }
  },
  {
    id: 'premiere-pro',
    name: 'Adobe Premiere Pro',
    description: 'Industry-standard non-linear video editing software for film, TV, and web video production.',
    os: ['Windows', 'macOS'],
    category: 'productivity',
    color: '#ea77ff',
    shortcuts: {
      'Project & File Operations': [
        { action: 'New Project', windows: 'Ctrl+Alt+N', mac: 'Cmd+Opt+N' },
        { action: 'New Sequence', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'Open Project', windows: 'Ctrl+O', mac: 'Cmd+O' },
        { action: 'Save', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Import', windows: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Export Media', windows: 'Ctrl+M', mac: 'Cmd+M' }
      ],
      'Timeline Editing': [
        { action: 'Undo', windows: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows: 'Ctrl+Shift+Z', mac: 'Cmd+Shift+Z' },
        { action: 'Razor Cut Clip', windows: 'Ctrl+K', mac: 'Cmd+K' },
        { action: 'Razor All Tracks', windows: 'Ctrl+Shift+K', mac: 'Cmd+Shift+K' },
        { action: 'Ripple Delete', windows: 'Shift+Delete', mac: 'Shift+Delete' },
        { action: 'Extract', windows: 'Ctrl+Shift+Delete', mac: 'Cmd+Shift+Delete' },
        { action: 'Lift', windows: 'Ctrl+Delete', mac: 'Cmd+Delete' },
        { action: 'Match Frame', windows: 'F', mac: 'F' },
        { action: 'Link/Unlink Clip', windows: 'Ctrl+L', mac: 'Cmd+L' },
        { action: 'Group', windows: 'Ctrl+G', mac: 'Cmd+G' },
        { action: 'Ungroup', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' }
      ],
      'Playback & Navigation': [
        { action: 'Play/Pause', windows: 'Spacebar', mac: 'Spacebar' },
        { action: 'Go to In Point', windows: 'Q', mac: 'Q' },
        { action: 'Go to Out Point', windows: 'W', mac: 'W' },
        { action: 'Go to Previous Edit', windows: 'Up Arrow', mac: 'Up Arrow' },
        { action: 'Go to Next Edit', windows: 'Down Arrow', mac: 'Down Arrow' },
        { action: 'Forward 1 Frame', windows: 'Right Arrow', mac: 'Right Arrow' },
        { action: 'Backward 1 Frame', windows: 'Left Arrow', mac: 'Left Arrow' },
        { action: 'Go to Beginning', windows: 'Home', mac: 'Fn+Left' },
        { action: 'Go to End', windows: 'End', mac: 'Fn+Right' },
        { action: 'J-K-L Shuttle', windows: 'J / K / L', mac: 'J / K / L' }
      ],
      'Tools & Trimming': [
        { action: 'Selection Tool', windows: 'V', mac: 'V' },
        { action: 'Track Select Forward', windows: 'A', mac: 'A' },
        { action: 'Ripple Edit Tool', windows: 'B', mac: 'B' },
        { action: 'Rolling Edit Tool', windows: 'N', mac: 'N' },
        { action: 'Rate Stretch Tool', windows: 'R', mac: 'R' },
        { action: 'Razor Tool', windows: 'C', mac: 'C' },
        { action: 'Slip Tool', windows: 'Y', mac: 'Y' },
        { action: 'Slide Tool', windows: 'U', mac: 'U' },
        { action: 'Pen Tool', windows: 'P', mac: 'P' },
        { action: 'Hand Tool', windows: 'H', mac: 'H' },
        { action: 'Zoom Tool', windows: 'Z', mac: 'Z' }
      ],
      'Markers': [
        { action: 'Add Marker', windows: 'M', mac: 'M' },
        { action: 'Go to Next Marker', windows: 'Shift+M', mac: 'Shift+M' },
        { action: 'Go to Previous Marker', windows: 'Ctrl+Shift+M', mac: 'Cmd+Shift+M' },
        { action: 'Set In Point', windows: 'I', mac: 'I' },
        { action: 'Set Out Point', windows: 'O', mac: 'O' },
        { action: 'Snap Toggle', windows: 'S', mac: 'S' }
      ]
    }
  },
  {
    id: 'blender',
    name: 'Blender',
    description: 'Free and open-source 3D creation suite supporting modeling, sculpting, animation, rendering, and video editing.',
    os: ['Windows', 'macOS', 'Linux'],
    category: 'productivity',
    color: '#ea7600',
    shortcuts: {
      'General Navigation (3D Viewport)': [
        { action: 'Rotate View', keys: 'MMB drag' },
        { action: 'Pan View', keys: 'Shift+MMB drag' },
        { action: 'Zoom', keys: 'Scroll wheel' },
        { action: 'Frame Selected', keys: 'Numpad .' },
        { action: 'Toggle Perspective/Ortho', keys: 'Numpad 5' },
        { action: 'Front View', keys: 'Numpad 1' },
        { action: 'Right View', keys: 'Numpad 3' },
        { action: 'Top View', keys: 'Numpad 7' },
        { action: 'Camera View', keys: 'Numpad 0' },
        { action: 'Local View (isolate)', keys: '/' }
      ],
      'Object Mode - Basic Operations': [
        { action: 'Select All', keys: 'A' },
        { action: 'Box Select', keys: 'B' },
        { action: 'Circle Select', keys: 'C' },
        { action: 'Move (Grab)', keys: 'G' },
        { action: 'Rotate', keys: 'R' },
        { action: 'Scale', keys: 'S' },
        { action: 'Constrain to Axis', keys: 'G/R/S + X/Y/Z' },
        { action: 'Delete', keys: 'X or Delete' },
        { action: 'Duplicate', keys: 'Shift+D' },
        { action: 'Duplicate Linked', keys: 'Alt+D' },
        { action: 'Add Object', keys: 'Shift+A' },
        { action: 'Apply Transform', keys: 'Ctrl+A' }
      ],
      'Edit Mode (Mesh Editing)': [
        { action: 'Toggle Edit Mode', keys: 'Tab' },
        { action: 'Vertex Select', keys: '1' },
        { action: 'Edge Select', keys: '2' },
        { action: 'Face Select', keys: '3' },
        { action: 'Extrude', keys: 'E' },
        { action: 'Bevel', keys: 'Ctrl+B' },
        { action: 'Loop Cut and Slide', keys: 'Ctrl+R' },
        { action: 'Knife Tool', keys: 'K' },
        { action: 'Merge', keys: 'M' },
        { action: 'Separate', keys: 'P' },
        { action: 'Inset Faces', keys: 'I' },
        { action: 'Fill', keys: 'F' },
        { action: 'Select Linked', keys: 'L' },
        { action: 'Subdivide', keys: 'Ctrl+E > Subdivide' }
      ],
      'Animation & Rendering': [
        { action: 'Play Animation', keys: 'Spacebar' },
        { action: 'Insert Keyframe', keys: 'I' },
        { action: 'Toggle X-Ray', keys: 'Alt+Z' },
        { action: 'Viewport Shading (Wire/Solid/Material/Rendered)', keys: 'Z > menu' },
        { action: 'Render Image', keys: 'F12' },
        { action: 'Render Animation', keys: 'Ctrl+F12' },
        { action: 'Sculpt Mode', keys: 'Ctrl+Tab > Sculpt' }
      ],
      'Workspace & Editors': [
        { action: 'Toggle Maximize Area', keys: 'Ctrl+Spacebar' },
        { action: 'Full Screen', keys: 'F11' },
        { action: 'Operator Search', keys: 'F3' },
        { action: 'Undo / Redo', keys: 'Ctrl+Z / Ctrl+Shift+Z' },
        { action: 'File Save', keys: 'Ctrl+S' },
        { action: 'File Open', keys: 'Ctrl+O' }
      ]
    }
  },
  {
    id: 'google-docs',
    name: 'Google Docs',
    description: "Google's web-based collaborative word processor, part of Google Workspace.",
    os: ['Web (Windows / macOS / ChromeOS)'],
    category: 'productivity',
    color: '#4285f4',
    shortcuts: {
      'Common Actions': [
        { action: 'Copy', windows_chromeos: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Cut', windows_chromeos: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Paste', windows_chromeos: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Paste Without Formatting', windows_chromeos: 'Ctrl+Shift+V', mac: 'Cmd+Shift+V' },
        { action: 'Undo', windows_chromeos: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows_chromeos: 'Ctrl+Shift+Z', mac: 'Cmd+Shift+Z' },
        { action: 'Print', windows_chromeos: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Find', windows_chromeos: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find and Replace', windows_chromeos: 'Ctrl+H', mac: 'Cmd+Shift+H' },
        { action: 'Insert/Edit Link', windows_chromeos: 'Ctrl+K', mac: 'Cmd+K' },
        { action: 'Insert Page Break', windows_chromeos: 'Ctrl+Enter', mac: 'Cmd+Enter' },
        { action: 'Show Keyboard Shortcuts', windows_chromeos: 'Ctrl+/', mac: 'Cmd+/' },
        { action: 'Tool Finder', windows_chromeos: 'Alt+/', mac: 'Opt+/' }
      ],
      'Text Formatting': [
        { action: 'Bold', windows_chromeos: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Italic', windows_chromeos: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Underline', windows_chromeos: 'Ctrl+U', mac: 'Cmd+U' },
        { action: 'Strikethrough', windows_chromeos: 'Alt+Shift+5', mac: 'Cmd+Shift+X' },
        { action: 'Superscript', windows_chromeos: 'Ctrl+.', mac: 'Cmd+.' },
        { action: 'Subscript', windows_chromeos: 'Ctrl+,', mac: 'Cmd+,' },
        { action: 'Copy Text Formatting', windows_chromeos: 'Ctrl+Alt+C', mac: 'Cmd+Opt+C' },
        { action: 'Paste Text Formatting', windows_chromeos: 'Ctrl+Alt+V', mac: 'Cmd+Opt+V' },
        { action: 'Clear Formatting', windows_chromeos: 'Ctrl+\\', mac: 'Cmd+\\' },
        { action: 'Increase Font Size', windows_chromeos: 'Ctrl+Shift+.', mac: 'Cmd+Shift+.' },
        { action: 'Decrease Font Size', windows_chromeos: 'Ctrl+Shift+,', mac: 'Cmd+Shift+,' }
      ],
      'Paragraph & Alignment': [
        { action: 'Increase Indent', windows_chromeos: 'Ctrl+]', mac: 'Cmd+]' },
        { action: 'Decrease Indent', windows_chromeos: 'Ctrl+[', mac: 'Cmd+[' },
        { action: 'Normal Text Style', windows_chromeos: 'Ctrl+Alt+0', mac: 'Cmd+Opt+0' },
        { action: 'Heading 1-6', windows_chromeos: 'Ctrl+Alt+[1-6]', mac: 'Cmd+Opt+[1-6]' },
        { action: 'Left Align', windows_chromeos: 'Ctrl+Shift+L', mac: 'Cmd+Shift+L' },
        { action: 'Center Align', windows_chromeos: 'Ctrl+Shift+E', mac: 'Cmd+Shift+E' },
        { action: 'Right Align', windows_chromeos: 'Ctrl+Shift+R', mac: 'Cmd+Shift+R' },
        { action: 'Justify', windows_chromeos: 'Ctrl+Shift+J', mac: 'Cmd+Shift+J' },
        { action: 'Numbered List', windows_chromeos: 'Ctrl+Shift+7', mac: 'Cmd+Shift+7' },
        { action: 'Bulleted List', windows_chromeos: 'Ctrl+Shift+8', mac: 'Cmd+Shift+8' }
      ],
      'Comments & Collaboration': [
        { action: 'Insert Comment', windows_chromeos: 'Ctrl+Alt+M', mac: 'Cmd+Opt+M' },
        { action: 'Open Discussion Thread', windows_chromeos: 'Ctrl+Alt+Shift+A', mac: 'Cmd+Opt+Shift+A' },
        { action: 'Insert Footnote', windows_chromeos: 'Ctrl+Alt+F', mac: 'Cmd+Opt+F' },
        { action: 'Open Revision History', windows_chromeos: 'Ctrl+Alt+Shift+H', mac: 'Cmd+Opt+Shift+H' },
        { action: 'Switch to Suggesting', windows_chromeos: 'Ctrl+Alt+Shift+X', mac: 'Cmd+Opt+Shift+X' },
        { action: 'Switch to Editing', windows_chromeos: 'Ctrl+Alt+Shift+Z', mac: 'Cmd+Opt+Shift+Z' }
      ],
      'Navigation & Tools': [
        { action: 'Word Count', windows_chromeos: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' },
        { action: 'Open Spelling/Grammar', windows_chromeos: 'Ctrl+Alt+X', mac: 'Cmd+Opt+X' },
        { action: 'Open Dictionary', windows_chromeos: 'Ctrl+Shift+Y', mac: 'Cmd+Shift+Y' },
        { action: 'Voice Typing', windows_chromeos: 'Ctrl+Shift+S', mac: 'Cmd+Shift+S' },
        { action: 'Zoom In', windows_chromeos: 'Ctrl++', mac: 'Cmd++' },
        { action: 'Zoom Out', windows_chromeos: 'Ctrl+-', mac: 'Cmd+-' }
      ]
    }
  },
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    description: "Google's web-based collaborative spreadsheet application, part of Google Workspace.",
    os: ['Web (Windows / macOS / ChromeOS)'],
    category: 'productivity',
    color: '#34a853',
    shortcuts: {
      'Common Actions': [
        { action: 'Copy', windows_chromeos: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Cut', windows_chromeos: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Paste', windows_chromeos: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Paste Values Only', windows_chromeos: 'Ctrl+Shift+V', mac: 'Cmd+Shift+V' },
        { action: 'Undo', windows_chromeos: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows_chromeos: 'Ctrl+Shift+Z', mac: 'Cmd+Shift+Z' },
        { action: 'Print', windows_chromeos: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Find', windows_chromeos: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find and Replace', windows_chromeos: 'Ctrl+H', mac: 'Cmd+Shift+H' },
        { action: 'Insert/Edit Link', windows_chromeos: 'Ctrl+K', mac: 'Cmd+K' },
        { action: 'Show Shortcuts', windows_chromeos: 'Ctrl+/', mac: 'Cmd+/' }
      ],
      'Cell Navigation': [
        { action: 'Move to Next Cell', windows_chromeos: 'Tab / Enter', mac: 'Tab / Enter' },
        { action: 'Move to Previous Cell', windows_chromeos: 'Shift+Tab', mac: 'Shift+Tab' },
        { action: 'Jump to Edge of Data', windows_chromeos: 'Ctrl+Arrow', mac: 'Cmd+Arrow' },
        { action: 'Go to Cell A1', windows_chromeos: 'Ctrl+Home', mac: 'Cmd+Home' },
        { action: 'Next Sheet', windows_chromeos: 'Alt+Down', mac: 'Opt+Down' },
        { action: 'Previous Sheet', windows_chromeos: 'Alt+Up', mac: 'Opt+Up' }
      ],
      'Cell Selection': [
        { action: 'Extend Selection by Cell', windows_chromeos: 'Shift+Arrow', mac: 'Shift+Arrow' },
        { action: 'Extend to Edge of Data', windows_chromeos: 'Ctrl+Shift+Arrow', mac: 'Cmd+Shift+Arrow' },
        { action: 'Select Entire Row', windows_chromeos: 'Shift+Space', mac: 'Shift+Space' },
        { action: 'Select Entire Column', windows_chromeos: 'Ctrl+Space', mac: 'Ctrl+Space' },
        { action: 'Select All', windows_chromeos: 'Ctrl+A', mac: 'Cmd+A' },
        { action: 'Add Non-Adjacent Cells', windows_chromeos: 'Ctrl+Click', mac: 'Cmd+Click' }
      ],
      'Data & Formula Entry': [
        { action: 'Edit Active Cell', windows_chromeos: 'F2', mac: 'F2 or Enter' },
        { action: 'Enter Data and Move Down', windows_chromeos: 'Enter', mac: 'Enter' },
        { action: 'Enter Data and Move Right', windows_chromeos: 'Tab', mac: 'Tab' },
        { action: 'Enter Data and Stay', windows_chromeos: 'Ctrl+Enter', mac: 'Cmd+Enter' },
        { action: 'Insert Current Date', windows_chromeos: 'Ctrl+;', mac: 'Cmd+;' },
        { action: 'Insert Current Time', windows_chromeos: 'Ctrl+Shift+;', mac: 'Cmd+Shift+;' },
        { action: 'Fill Down', windows_chromeos: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Fill Right', windows_chromeos: 'Ctrl+R', mac: 'Cmd+R' },
        { action: 'Insert Line Break in Cell', windows_chromeos: 'Alt+Enter', mac: 'Opt+Enter' },
        { action: 'Array Formula', windows_chromeos: 'Ctrl+Shift+Enter', mac: 'Cmd+Shift+Enter' }
      ],
      'Formatting': [
        { action: 'Bold', windows_chromeos: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Italic', windows_chromeos: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Underline', windows_chromeos: 'Ctrl+U', mac: 'Cmd+U' },
        { action: 'Strikethrough', windows_chromeos: 'Alt+Shift+5', mac: 'Cmd+Shift+X' },
        { action: 'Apply Number Format', windows_chromeos: 'Ctrl+Shift+1', mac: 'Cmd+Shift+1' },
        { action: 'Apply Currency Format', windows_chromeos: 'Ctrl+Shift+4', mac: 'Cmd+Shift+4' },
        { action: 'Apply Percentage Format', windows_chromeos: 'Ctrl+Shift+5', mac: 'Cmd+Shift+5' },
        { action: 'Clear Formatting', windows_chromeos: 'Ctrl+\\', mac: 'Cmd+\\' },
        { action: 'Hide Row', windows_chromeos: 'Ctrl+Alt+9', mac: 'Cmd+Opt+9' },
        { action: 'Hide Column', windows_chromeos: 'Ctrl+Alt+0', mac: 'Cmd+Opt+0' }
      ],
      'Data & Sheet Management': [
        { action: 'Insert New Sheet', windows_chromeos: 'Shift+F11', mac: 'Fn+Shift+F11' },
        { action: 'Create Filter', windows_chromeos: 'Ctrl+Shift+L', mac: 'Cmd+Shift+L' },
        { action: 'Open Revision History', windows_chromeos: 'Ctrl+Alt+Shift+H', mac: 'Cmd+Opt+Shift+H' }
      ]
    }
  },
  {
    id: 'microsoft-excel',
    name: 'Microsoft Excel',
    description: 'Industry-standard spreadsheet application for data analysis, calculations, charting, and financial modeling.',
    os: ['Windows', 'macOS'],
    category: 'productivity',
    color: '#217346',
    shortcuts: {
      'File & Workbook Operations': [
        { action: 'New Workbook', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'Open', windows: 'Ctrl+O', mac: 'Cmd+O' },
        { action: 'Save', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Save As', windows: 'F12', mac: 'Cmd+Shift+S' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Close Workbook', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Close Excel', windows: 'Alt+F4', mac: 'Cmd+Q' }
      ],
      'Navigation & Selection': [
        { action: 'Jump to Edge of Data', windows: 'Ctrl+Arrow', mac: 'Cmd+Arrow' },
        { action: 'Go to Cell A1', windows: 'Ctrl+Home', mac: 'Cmd+Home' },
        { action: 'Go to Any Cell', windows: 'F5 or Ctrl+G', mac: 'Fn+F5 or Cmd+G' },
        { action: 'Next Sheet', windows: 'Ctrl+PgDn', mac: 'Fn+Cmd+Down' },
        { action: 'Previous Sheet', windows: 'Ctrl+PgUp', mac: 'Fn+Cmd+Up' },
        { action: 'Select Entire Row', windows: 'Shift+Space', mac: 'Shift+Space' },
        { action: 'Select Entire Column', windows: 'Ctrl+Space', mac: 'Ctrl+Space' },
        { action: 'Select All', windows: 'Ctrl+A', mac: 'Cmd+A' },
        { action: 'Extend to Edge of Data', windows: 'Ctrl+Shift+Arrow', mac: 'Cmd+Shift+Arrow' },
        { action: 'Add Non-Adjacent Selection', windows: 'Ctrl+Click', mac: 'Cmd+Click' }
      ],
      'Editing & Formatting': [
        { action: 'Edit Active Cell', windows: 'F2', mac: 'Ctrl+U' },
        { action: 'Cut', windows: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Copy', windows: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Paste', windows: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Paste Special', windows: 'Ctrl+Alt+V', mac: 'Cmd+Ctrl+V' },
        { action: 'Undo', windows: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows: 'Ctrl+Y', mac: 'Cmd+Y' },
        { action: 'Bold', windows: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Italic', windows: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Underline', windows: 'Ctrl+U', mac: 'Cmd+U' },
        { action: 'Open Format Cells', windows: 'Ctrl+1', mac: 'Cmd+1' },
        { action: 'Apply Number Format', windows: 'Ctrl+Shift+1', mac: 'Cmd+Shift+1' },
        { action: 'Apply Currency Format', windows: 'Ctrl+Shift+4', mac: 'Cmd+Shift+4' },
        { action: 'Apply Percentage Format', windows: 'Ctrl+Shift+5', mac: 'Cmd+Shift+5' }
      ],
      'Formulas & Functions': [
        { action: 'AutoSum', windows: 'Alt+=', mac: 'Cmd+Shift+T' },
        { action: 'Insert Function', windows: 'Shift+F3', mac: 'Fn+Shift+F3' },
        { action: 'Toggle Absolute Reference', windows: 'F4', mac: 'Cmd+T' },
        { action: 'Calculate All Worksheets', windows: 'F9', mac: 'Fn+F9' },
        { action: 'Show Formulas Toggle', windows: 'Ctrl+\u0060', mac: 'Cmd+\u0060' },
        { action: 'Fill Down', windows: 'Ctrl+D', mac: 'Cmd+D' },
        { action: 'Fill Right', windows: 'Ctrl+R', mac: 'Cmd+R' },
        { action: 'Enter Data and Stay', windows: 'Ctrl+Enter', mac: 'Cmd+Return' },
        { action: 'Insert Current Date', windows: 'Ctrl+;', mac: 'Cmd+;' },
        { action: 'Insert Current Time', windows: 'Ctrl+Shift+;', mac: 'Cmd+Shift+;' }
      ],
      'Rows, Columns & Sheets': [
        { action: 'Insert Row(s)', windows: 'Ctrl++', mac: 'Ctrl+Shift+=' },
        { action: 'Delete Row(s)', windows: 'Ctrl+-', mac: 'Cmd+-' },
        { action: 'Insert New Worksheet', windows: 'Shift+F11', mac: 'Fn+Shift+F11' },
        { action: 'Hide Row', windows: 'Ctrl+9', mac: 'Cmd+9' },
        { action: 'Unhide Row', windows: 'Ctrl+Shift+9', mac: 'Cmd+Shift+9' },
        { action: 'Hide Column', windows: 'Ctrl+0', mac: 'Cmd+0' },
        { action: 'Unhide Column', windows: 'Ctrl+Shift+0', mac: 'Cmd+Shift+0' },
        { action: 'Group Rows/Columns', windows: 'Alt+Shift+Right', mac: 'Cmd+Shift+K' },
        { action: 'Ungroup Rows/Columns', windows: 'Alt+Shift+Left', mac: 'Cmd+Shift+J' },
        { action: 'Add Filter', windows: 'Ctrl+Shift+L', mac: 'Cmd+Shift+L' },
        { action: 'Create Table', windows: 'Ctrl+T', mac: 'Cmd+T' }
      ],
      'PivotTables & Charts': [
        { action: 'Create PivotTable', windows: 'Alt+N then V', mac: 'Cmd+Opt+P' },
        { action: 'Create Chart on Current Sheet', windows: 'Alt+F1', mac: 'Fn+Alt+F1' },
        { action: 'Create Chart on New Sheet', windows: 'F11', mac: 'Fn+F11' }
      ]
    }
  },
  {
    id: 'microsoft-word',
    name: 'Microsoft Word',
    description: 'Industry-standard word processing application for creating documents, reports, letters, and professional publications.',
    os: ['Windows', 'macOS'],
    category: 'productivity',
    color: '#2b579a',
    shortcuts: {
      'File & Document Operations': [
        { action: 'New Document', windows: 'Ctrl+N', mac: 'Cmd+N' },
        { action: 'Open', windows: 'Ctrl+O', mac: 'Cmd+O' },
        { action: 'Save', windows: 'Ctrl+S', mac: 'Cmd+S' },
        { action: 'Save As', windows: 'F12', mac: 'Cmd+Shift+S' },
        { action: 'Print', windows: 'Ctrl+P', mac: 'Cmd+P' },
        { action: 'Close Document', windows: 'Ctrl+W', mac: 'Cmd+W' },
        { action: 'Close Word', windows: 'Alt+F4', mac: 'Cmd+Q' }
      ],
      'Editing & Clipboard': [
        { action: 'Undo', windows: 'Ctrl+Z', mac: 'Cmd+Z' },
        { action: 'Redo', windows: 'Ctrl+Y', mac: 'Cmd+Y' },
        { action: 'Cut', windows: 'Ctrl+X', mac: 'Cmd+X' },
        { action: 'Copy', windows: 'Ctrl+C', mac: 'Cmd+C' },
        { action: 'Paste', windows: 'Ctrl+V', mac: 'Cmd+V' },
        { action: 'Select All', windows: 'Ctrl+A', mac: 'Cmd+A' },
        { action: 'Find', windows: 'Ctrl+F', mac: 'Cmd+F' },
        { action: 'Find and Replace', windows: 'Ctrl+H', mac: 'Cmd+Shift+H' },
        { action: 'Go To', windows: 'Ctrl+G or F5', mac: 'Cmd+G' },
        { action: 'Repeat Last Action', windows: 'F4', mac: 'Cmd+Y' },
        { action: 'Insert Hyperlink', windows: 'Ctrl+K', mac: 'Cmd+K' },
        { action: 'Insert Page Break', windows: 'Ctrl+Enter', mac: 'Cmd+Enter' }
      ],
      'Text Formatting': [
        { action: 'Bold', windows: 'Ctrl+B', mac: 'Cmd+B' },
        { action: 'Italic', windows: 'Ctrl+I', mac: 'Cmd+I' },
        { action: 'Underline', windows: 'Ctrl+U', mac: 'Cmd+U' },
        { action: 'Double Underline', windows: 'Ctrl+Shift+D', mac: 'Cmd+Shift+D' },
        { action: 'Strikethrough', windows: 'Ctrl+D then check box', mac: 'Cmd+Shift+X' },
        { action: 'Subscript', windows: 'Ctrl+=', mac: 'Cmd+=' },
        { action: 'Superscript', windows: 'Ctrl+Shift++', mac: 'Cmd+Shift++' },
        { action: 'Increase Font Size', windows: 'Ctrl+Shift+>', mac: 'Cmd+Shift+>' },
        { action: 'Decrease Font Size', windows: 'Ctrl+Shift+<', mac: 'Cmd+Shift+<' },
        { action: 'Change Case Toggle', windows: 'Shift+F3', mac: 'Fn+Shift+F3' },
        { action: 'Clear Formatting', windows: 'Ctrl+Spacebar', mac: 'Cmd+\\' },
        { action: 'Copy Formatting', windows: 'Ctrl+Shift+C', mac: 'Cmd+Shift+C' },
        { action: 'Paste Formatting', windows: 'Ctrl+Shift+V', mac: 'Cmd+Shift+V' },
        { action: 'Open Font Dialog', windows: 'Ctrl+D', mac: 'Cmd+D' }
      ],
      'Paragraph & Alignment': [
        { action: 'Left Align', windows: 'Ctrl+L', mac: 'Cmd+L' },
        { action: 'Center Align', windows: 'Ctrl+E', mac: 'Cmd+E' },
        { action: 'Right Align', windows: 'Ctrl+R', mac: 'Cmd+R' },
        { action: 'Justify', windows: 'Ctrl+J', mac: 'Cmd+J' },
        { action: 'Increase Indent', windows: 'Ctrl+M', mac: 'Cmd+M' },
        { action: 'Decrease Indent', windows: 'Ctrl+Shift+M', mac: 'Cmd+Shift+M' },
        { action: 'Single Space', windows: 'Ctrl+1', mac: 'Cmd+1' },
        { action: 'Double Space', windows: 'Ctrl+2', mac: 'Cmd+2' },
        { action: '1.5 Line Space', windows: 'Ctrl+5', mac: 'Cmd+5' }
      ],
      'Navigation & Selection': [
        { action: 'Move One Word Left/Right', windows: 'Ctrl+Left/Right', mac: 'Opt+Left/Right' },
        { action: 'Move to Beginning of Line', windows: 'Home', mac: 'Cmd+Left' },
        { action: 'Move to End of Line', windows: 'End', mac: 'Cmd+Right' },
        { action: 'Move to Start of Document', windows: 'Ctrl+Home', mac: 'Cmd+Up' },
        { action: 'Move to End of Document', windows: 'Ctrl+End', mac: 'Cmd+Down' },
        { action: 'Select One Word', windows: 'Ctrl+Shift+Left/Right', mac: 'Opt+Shift+Left/Right' }
      ],
      'Insert & Review': [
        { action: 'Insert Comment', windows: 'Ctrl+Alt+M', mac: 'Cmd+Opt+A' },
        { action: 'Track Changes Toggle', windows: 'Ctrl+Shift+E', mac: 'Cmd+Shift+E' },
        { action: 'Accept Change', windows: 'Alt+Ctrl+C', mac: 'Cmd+Opt+C' },
        { action: 'Insert Footnote', windows: 'Alt+Ctrl+F', mac: 'Cmd+Opt+F' },
        { action: 'Spelling & Grammar', windows: 'F7', mac: 'Fn+F7' },
        { action: 'Thesaurus', windows: 'Shift+F7', mac: 'Fn+Shift+F7' },
        { action: 'Word Count', windows: 'Ctrl+Shift+G', mac: 'Cmd+Shift+G' }
      ]
    }
  }
];

// Helper: get product by ID
export function getProductById(id) {
  return products.find(p => p.id === id);
}

// Helper: get products by category
export function getProductsByCategory(categoryId) {
  return products.filter(p => p.category === categoryId);
}

// Helper: get category name
export function getCategoryName(categoryId) {
  return CATEGORIES[categoryId]?.name || categoryId;
}

// Helper: search across all products
export function searchShortcuts(query, productIds = null) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  const results = [];

  for (const product of products) {
    if (productIds && !productIds.includes(product.id)) continue;

    for (const [categoryName, shortcuts] of Object.entries(product.shortcuts)) {
      for (const shortcut of shortcuts) {
        // Search in action name
        const actionMatch = shortcut.action.toLowerCase().includes(q);
        // Search in key strings
        const keyValues = Object.values(shortcut).filter(v => typeof v === 'string');
        const keyMatch = keyValues.some(v => v.toLowerCase().includes(q));

        // Search in product/category names
        const productMatch = product.name.toLowerCase().includes(q);
        const categoryMatch = categoryName.toLowerCase().includes(q);

        if (actionMatch || keyMatch || productMatch || categoryMatch) {
          results.push({
            product,
            categoryName,
            shortcut
          });
        }
      }
    }
  }

  return results;
}
