import {graphql, PageProps} from 'gatsby';
import MailIcon from 'components/icons/mail.svg'
import InstagramIcon from 'components/icons/instagram.svg'

export default function Contacts({data}: PageProps<{ artist: { contact: string[] } }>) {
    const {contact} = data.artist;
    return <div className="flex flex-col">{contact.map(c => <Contact key={c} contact={c.trim()}/>)}</div>
}

export const pageQuery = graphql`
    query ContactsPage {
        artist: contentfulArtist {
            contact
        }
    }
`

const INSTAGRAM_PREFIX = 'instagram:';

function ContactIcon({contact, className}: GenericProps<{ contact: string }>) {
    return contact.startsWith(INSTAGRAM_PREFIX)
        ? <InstagramIcon className={className}/>
        : <MailIcon className={className}/>
}

function contactToTitle(contact: string) {
    return contact.startsWith(INSTAGRAM_PREFIX)
        ? contact.substring(INSTAGRAM_PREFIX.length)
        : contact

}

function contactToHref(contact: string) {
    return contact.startsWith(INSTAGRAM_PREFIX)
        ? `https://instagram.com/${contactToTitle(contact)}`
        : `mailto: ${contact}`
}

function Contact({contact}: { contact: string }) {
    return <a className="flex gap-1" href={contactToHref(contact)} target="_blank">
        <ContactIcon className="w-4" contact={contact}/>
        <span>{contactToTitle(contact)}</span>
    </a>

}