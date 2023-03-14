import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog + ' ' + s.active}> Olga </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}> Hi </div>
      </div>
    </div>
  );
}

export default Dialogs;
