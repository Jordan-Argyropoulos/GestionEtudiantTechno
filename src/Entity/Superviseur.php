<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Superviseur
 *
 * @ORM\Table(name="superviseur")
 * @ORM\Entity
 */
class Superviseur
{
    /**
     * @var int
     *
     * @ORM\Column(name="Id_Superviseur", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idSuperviseur;

    /**
     * @var string
     *
     * @ORM\Column(name="Email", type="string", length=50, nullable=false)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="Password", type="string", length=50, nullable=false)
     */
    private $password;

    /**
     * @var string
     *
     * @ORM\Column(name="Nom", type="string", length=50, nullable=false)
     */
    private $nom;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Prenom", type="string", length=50, nullable=true)
     */
    private $prenom;


}
