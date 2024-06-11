package com.numetry.www.controller;


import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.numetry.www.entity.SmsDetails;
import com.numetry.www.service.SmsService;

import jakarta.mail.MessagingException;

@CrossOrigin(origins="*")
@RestController
public class SMSController {

	@Autowired
    SmsService smsService;

    @Autowired
    private SimpMessagingTemplate webSocket;

    private final String  TOPIC_DESTINATION = "/lesson/sms";

    @RequestMapping(value = "/sms", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void smsSubmit(@RequestBody SmsDetails sms) {
        try{
            smsService.send(sms);
        }
        catch(Exception e){

            webSocket.convertAndSend(TOPIC_DESTINATION, getTimeStamp() + ": Error sending the SMS: "+e.getMessage());
            throw e;
        }
        webSocket.convertAndSend(TOPIC_DESTINATION, getTimeStamp() + ": SMS has been sent!: "+sms.getTo());

    }

    @RequestMapping(value = "/smscallback", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void smsCallback(@RequestBody MultiValueMap<String, String> map) {
       smsService.receive(map);
       webSocket.convertAndSend(TOPIC_DESTINATION, getTimeStamp() + ": Twilio has made a callback request! Here are the contents: "+map.toString());
    }

    private String getTimeStamp() {
       return DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now());
    }
    
    //Email sending with OTP using SMTP
    @PostMapping("/sendEmailOtp/{email}")
    public String sendEmailOtp(@PathVariable String email) throws MessagingException
    {
    	return smsService.sendEmailOtp(email);
    }
    
    
    //to Verify the Email OTP
    @GetMapping("/verifyEmailotp/{otp}")
    public ResponseEntity<String> verifyEmailOtp(@PathVariable String otp)
    {
    	return smsService.verifyEmailOtp(otp);
    }
    
    //Mobile sending with OTP using vonage API
    @PostMapping("/send/{to}")
    public String sendMessage(@PathVariable String to) {
        smsService.sendSms(to); // Change recipient number accordingly
        return "SMS sent!";
    }
    
    //to Verify the Mobile OTP
    @GetMapping("/verifyMobileotp/{otp}")
    public ResponseEntity<String> verifyMobileOtp(@PathVariable String otp)
    {
    	return smsService.verifyMobileOtp(otp);
    }
}
	
	
	


	
    

