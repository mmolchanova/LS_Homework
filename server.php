<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $street = $_POST['street'];
  $house = $_POST['house'];
  $part = $_POST['part'];
  $apartment = $_POST['apartment'];
  $floor = $_POST['floor'];

  $comment = $_POST['comment'];

  $payment = $_POST['payment'];
  $callback = $_POST['callback']; //1 или null
  $callback = isset($callback) ? 'НЕТ' : 'ДА';

  $mail_message = '
  <html>
      <head>
        <title>Заявка</title>
      </head>
      <body>
        <h2>Заказ</h2>
        <ul>
          <li>Имя: '.$name.'</li>
          <li>Телефон: '. $phone.'</li>
          <li>Улица: '. $street.'</li>
          <li>Дом: '. $house.'</li>
          <li>Корпус: '.$part.'</li>
          <li>Квартира: '.$apartment .'</li>
          <li>Этаж: '.$floor.'</li>
          <li>Комментарий: '.$comment.'</li>
          <li>Способ оплаты: '.$payment.'</li>
          <li>Нужно ли перезванивать: '.$callback.'</li>
        </ul>
      </body>
    </html>
    ';

  $headers = "From: Mr.Burger\r\n".
  "MIME-Version: 1.0" . "\r\n" .
  "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('molchanova.m2903@gmail.com', 'Заказ', $mail_message, $headers);

  $data;

  if ($mail) {
    $data['status'] = "ОК";
    $data['mes'] = "Письмо успешно отправлено";
  } else {
    $data['status'] = "NO";
    $data['mes'] = "На сервере произошла ошибка";
  }

  echo json_encode($data);

?>