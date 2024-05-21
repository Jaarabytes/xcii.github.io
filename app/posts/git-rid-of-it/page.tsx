import Link from "next/link"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function GitRidOfIt () {


    return (
        <>
            <div>
                <Link href='/posts' className="underline hover:text-red-400">Posts</Link>
                <h1>Git rid of it</h1>
                <p>Have you ever encountered this error before? (Perhaps when cloning a private github repository): </p>
        <br></br>
        <br></br>
        <i>Git authentication failed? fatal: No credential store has been selected. Support for password authentication was removed in 13th August 2021.</i>
        <br></br>
        <br></br>
        {/* Insert the image here */}
        <img src='/git-rid-of-it/Screenshot_2024-02-26_13_54_28.jpg' className= 'my-5' alt="git error that prompts for authentication"></img>
        <p>Well, I have, and I finally figured it out</p>
        <br></br>
        <br></br>
        {/* Insert the nerd gif here */}
        <img src='/git-rid-of-it/icegif-777.gif' alt="Nerd emoji gif"></img>
        <br></br>
        <p className="text-xl font-extrabold my-5">
        Enough of foreplay, let's get serious.
        </p>
        <p>
        It seems that github enhanced their security such that inputting your password and
        username is not enough for them, since an attacker can easily get them through social 
        engineering. There are two ways of authentication (those that I know of)
        </p>
        <br></br>
        <p>They include:</p>
        <li><a href="#ssh-method" className="text-red-400 hover:underline">`Using Secure SHell (SSH) with its key`</a></li>
        <li><a href="#cli-method" className="text-red-400 hover:underline">`Using the Command Line Interface`</a></li>
        <br></br>
        <h1 className="text-2xl font-extrabold my-5" id="ssh-method">1. The SSH method (my favorite)</h1>
        <br></br>
        <p>When cloning the preferred github repository, you will have to use the SSH url</p>
        {/* Insert github SSH Url here */}
        <img  className= 'my-5' src='/git-rid-of-it/Screenshot_2024-02-26_14_57_25.jpg' alt="ssh url clone github repository"></img>
        <p>Before that, you have to create a ssh key, which is a private and public key which 
            authenticate you. These keys are tedious and time-consuming to crack.
        </p>
        <br></br>
        <p>They can be generated by the following command: </p>
        <br></br>
        <SyntaxHighlighter code={`ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`} language="Bash" style={dark}>
        </SyntaxHighlighter>
        <br></br>
        <br></br>
        <p>I will explain the commands:</p>
        <br></br>
        <p>
            {/* This generates the SSH key using the RSA algorithm and using 4096 bytes hence
        the (-t rsa) and (-b 4096). The -C stands comment or identifier for your email. Replace and input
        your email there. */}
        </p>
        <dl>
            <li>ssh-keygen - Generates the SSH key pair</li>
            <li><span>-t rsa</span> - Uses RSA algorithm</li>
            <li><span>-b 4096</span> - Uses 4096 bytes for generation</li>
            <li><span>-C &lt;youremail@example.com&gt;</span> - your email is used as comment</li>
        </dl>
        <br></br>
        <br></br>
        <p>
        This will be the response from the terminal: 
        </p>
        <br></br>
        <SyntaxHighlighter code={` Generating public/private ALGORITHM key pair.`} language="Bash"  style={dark}>
        </SyntaxHighlighter>
        <br></br>
        <br></br>
        <p>
            You will be prompted to input and confirm a safe passphrase.
            ( You may
            also press Enter to skip this process. )
        </p>
        <br></br>
        <p>
            Add your ssh key to the ssh agent by running the below command
            (Depending on the system you are running, you may need superuser privileges)
        </p>
        <br></br>
        <SyntaxHighlighter code={`
eval "$(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
            `}
            language="Bash" 
            style={dark}
            >
        </SyntaxHighlighter>
        <br></br>
        <br></br>
        <p>You  may want to verify if your SSH key was added. Use the below command: </p>
        <br></br>
        <SyntaxHighlighter code={`ssh -T git@github.com`} style={dark}  language="Bash" ></SyntaxHighlighter>
        <br></br>
        <br></br>
        <br></br>
        <p>Onto the finals where we add the ssh key to our github account:</p>
        <img className="my-5" src='/git-rid-of-it/Screenshot_2024-02-13_15_47_11.png' alt='github personal account settings'></img>
        <p>Directions to take: </p>
        <br></br>
        <dl>
            <li>Click the sidebar on the right then Settings</li>
            <li>Select "SSH and GPG keys"</li>
        </dl>
        <br></br>
        <br></br>
        <p>Copy the contents of the contents of the id_rsa.pub file which is under the hidden .ssh directory and paste it as your personal access token</p>
        <br></br>
        <p>This is what you should be pasting in the field: </p>
        <br></br>
        <img src='/git-rid-of-it/Screenshot_2024-03-01_23_36_05.png'/>
        <br></br>
        <p>From there on, I believe there will be minimal issues encountered however what if you cloned the repository using the http client
            but now cannot authenticate? Don't fret.
        </p>
        <br></br>
        <p>Head towards the repository directory using the cd command and type in the following command in your terminal: </p>
        <br></br>
        <SyntaxHighlighter  language="Bash" style={dark} code={`git remote set-url origin <ssh_github_repo_link>;`}>
        </SyntaxHighlighter>
        <br></br>
        <br></br>
        <p>The above command resets your remote-origin url to the SSH url. This means that when performing remote changes to the
            repository, it will use the SSH url.</p>
        <br></br>
        <p>You can also view the remote origin url through the below command:</p>
        <br></br>
        <SyntaxHighlighter language="Bash"  style={dark} code={`git remote -v`} />
        <br></br>
        <br></br>
        <p>More info here :</p>
        <br></br>
        <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" className=" text-red-400 truncate" target="_blank">
        https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
        </a>
        <br></br>
        <br></br>
        <h1 className="text-2xl font-extrabold my-5" id="cli-method">2. The Github CLI method</h1>
        <br></br>
        <p>First, `gh` has to be installed. </p>
        <br></br>
        <SyntaxHighlighter  language="Bash" style={dark} code={`sudo apt install gh`} />
        <br></br>
        <br></br>
        <img src='/git-rid-of-it/Screenshot_2024-03-01_16_01_13.png'></img>
        <br></br>
        <p>Remember to input your password since the command uses `sudo` and this requires superuser privileges. I am already running as `root`
            so I do not need to use `sudo`
        </p>
        <br></br>
        <p>For those who do not know, the github CLI is just you, logged in to your github account
            and navigating it using your terminal.
        </p>
        <br></br>
        <p>Type in the command:</p>
        <br></br>
        <SyntaxHighlighter  language="Bash" style={dark} code={`gh auth login`} />
        <br></br>
        <br></br>
        <img src="/git-rid-of-it/Screenshot_2024-03-01_15_07_37.png"></img>
        <br></br>
        <p>You will be asked questions, for which you will answer according to your preference. After answering, you will be 
            given a one time code. Which you will copy then press `Enter` to open your browser and input the one-time code.
        </p>
        <br></br>
        <img src="/git-rid-of-it/Screenshot_2024-03-01_15_07_50.png"></img>
        <br></br>
        <p><b>NOTE: </b>Make sure that you are using a safe network (to prevent you from being hacked). Just use your own mobile phone hotspot.</p>
        <br></br>
        <p>After that you would have successfully logged in and freely access your projects</p>
        <br></br>
        <img src="/git-rid-of-it/Screenshot_2024-03-01_15_08_06.png"></img>
        <br></br>
        <p>If you are a real reader: </p>
        <br></br>       
        <a href='https://cli.github.com/manual/gh_auth_login' target="_blank"  className=" text-red-400 truncate" > https://cli.github.com/manual/gh_auth_login</a>
        <br></br>
        <br></br>
        <p>I prefer the SSH method since it carries less risk though, but that's just me. Stay safe and git to work. </p>
        <br></br>
        {/* Add the dum pun gif */}
        <img src="/git-rid-of-it/dum-tss.gif" alt="Dum tss gif from gif tenor"></img>
        <br></br>
        <b>Thanks for reading!</b>
            </div>
        </>
    )
}