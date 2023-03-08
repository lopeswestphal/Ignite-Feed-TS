import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    /*
    Closures no react: 
    E como se criasse um outro contexto, não consigo utilizar a variavel com o valor novo.
    Ex: setLikeCount(likeCount + 1)
        setLikeCount(likeCount + 1)
    */
    function handleLikeComment() {
       setLikeCount((valorAtual) => {
        return valorAtual + 1
       });
    }

    /* 
    Todos os eventos do react esperam uma função como propridade ou valor.
    {handleLikeComment()} -> excuto a função indenpendente do envento. (causando muitos erros)
    {handleLikeComment} -> espero o click para excutar.
    {() => setLikeCount(likeCount + 1)} -> Se utilizarmos uma arrow function resolvemos o problema.
    */
    return (
        <div className={styles.comment}>
            <Avatar 
                src="https://github.com/lopeswestphal.png"
                hasBorder={false}
                alt=""
                
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Matheus Lopes</strong>
                            <time title="11 de Mario às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}