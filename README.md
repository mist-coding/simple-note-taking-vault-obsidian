# simple-note-taking-vault-obsidian

Hello! This project aims to make Obsidian usable for simple note-taking, without the extra hassle. For now, it's only optimized for desktop. Hope it's helpful for you! Some parts were vibe-coded with AI assistance, don't expect anything professional.

A quick explanation of each CSS snippet and community plugins used on this Vault, plus some recommendations are found below.

## CCS snippets explanation:
1) CustomFileExplorerDark
2) CustomFileExplorerLight
3) CustomFrontmatterDark
4) CustomFrontmatterLight
These four snippets keep the FileExplorer's and Frontmatter's appearance consistent while using the Dark or Light base color schemes.
5) MarkGone_custom_dark
6) MarkGone_custom_light

These last two reduce the amount of visual changes Markdown creates on Obsidian to the minimum aiming for a simple note-taking experience, while taking into account the base color scheme.

Use the corresponding snippets depending on which base color scheme are you using.
When using the "Light" base color scheme:

CustomFileExplorerLight,  CustomFrontmatterLight and MarkGone_custom_light should be ENABLED.
CustomFileExplorerDark, CustomFrontmatterDark and MarkGone_custom_dark should be DISABLED.

When using the "Dark" base color scheme:

CustomFileExplorerLight,  CustomFrontmatterLight and MarkGone_custom_light should be DISABLED.
CustomFileExplorerDark, CustomFrontmatterDark and MarkGone_custom_dark should be ENABLED.

7) front_matter_source

Adjusts the frontmatter's appearance.

8) hide_top_right_button

Hides top right "collapse/expand" button for simplicity. (turned off by default)

9) left-margin-padding

Adjusts the left margin padding.

10) new_note_button

Makes the new note button a little more flashy. (turned off by default)

11) new_note_quick_button.css

Makes the quick new note button that uses the QuickAdd plugin a little more flashy. 

12) Roboto-Regular2

Enables this quite decent font for the entire Obsidian app.

13) short_links.css

Make direct note links to notes without a specified title shorter without repeating date and time.

14) top_tab_numbers_active

Includes numbering on the tab panel.

## Community plugins explanation:
1) Code block from selection

Useful to select code and apply the correct formatting.

2) Commander

Make managing new items on the menus possible.

3) FileExplorer++

For hiding the "QuickAdd scripts", "templates", and the "Archive" folders and other features such as pinning files.

4) Force note view mode

Restrict folders or files exclusively to note view mode.

5) Front Matter Title

Shows the notes titles on the file explorer and enables the separation of the files titles from the notes titles within the Obsidian app.

6) Homepage

Adds a convenient Homepage icon on the Ribbon Bar and refreshes Obsidian on each startup automatically.

7) Meld Encrypt

Enables individual local encryption for selected notes and even sections within a note.

8) Novel word count

Conveniently shows the number of words on each note and the note total of the vault.

9) Omnisearch

Enhanced search.

10) QuickAdd

Necessary for the "Quick Note" command as well as the Select and Copy QuickAdd scripts I created, which quickly select/copy all the text on the body of the note. I also included two more additional scripts in case its necessary to copy the entire note including the frontmatter, which you can access using the command palette. 

11) Settings Search

For searching on the settings menu.

12) Style Settings

Necessary for accomplishing the desired appearance with the Blue Topaz Theme and changing specific appearance settings.

13) Templater

Permits the use of the note templates which keeps the desired format for each new note.

14) Trash Explorer

Helps navigate the deleted files.

## Further comments:

I recommend using the "QuickAdd: Quick Note" command for new notes (big icon highlighted with purple on the Explorer menu), this keeps the "DD.MM.YYYY-HH.mm.ss" format for the automatic title of each new note which helps organizing the files on the long run. The title of the notes within Obsidian is kept separate from the actual file title while using this way of creating new notes. 

If you prefer to use another title format go to the "templates folder", open the "new_note_default.md" and change both parts of the code that feature "DD.MM.YYYY-HH.mm.ss" to your desired format. Then go to the "Templates" core plugin on the setting menu and do the same. Finally go to the "QuickAdd" community plugin menu, go to the "Quick Note" settings and change the "File Name Format" to your new desire format.
