import {graphql, PageProps} from 'gatsby';
import MailIcon from 'components/icons/mail.svg'
import InstagramIcon from 'components/icons/instagram.svg'
import {Layout} from 'components/layout';

export default function Contacts({data}: PageProps<{ artist: { contact: string[] } }>) {
    const {contact} = data.artist;
    return <Layout>
        <div className="flex flex-col">
            {contact.map(c => <Contact key={c} contact={c.trim()}/>)}
        </div>
    </Layout>
}

export const pageQuery = graphql`
    query ContactsPage {
        artist: contentfulArtist {
            contact
        }
    }
`

function Contact({contact}: { contact: string }) {
    return <a className="flex gap-1 items-center" href={contactToHref(contact)} target="_blank">
        <ContactIcon className="w-4 h-4" contact={contact}/>
        <span>{contactToTitle(contact)}</span>
    </a>

}

const INSTAGRAM_PREFIX = 'https://www.instagram.com/';

function ContactIcon({contact, className}: GenericProps<{ contact: string }>) {
    return contact.startsWith(INSTAGRAM_PREFIX)
        ? <InstagramIcon className={className}/>
        : <MailIcon className={className}/>
}

function contactToTitle(contact: string) {
    return contact.startsWith(INSTAGRAM_PREFIX)
        ? contact.substring(contact.lastIndexOf('/') + 1)
        : contact

}

function contactToHref(contact: string) {
    return contact.startsWith(INSTAGRAM_PREFIX)
        ? contact
        : `mailto: ${contact}`
}
