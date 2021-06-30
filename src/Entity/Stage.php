<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use PhpParser\Node\Name;

/**
 * Stage
 *
 * @ORM\Table(name="stage", indexes={@ORM\Index(name="Id_Entreprise", columns={"Id_Entreprise"}), @ORM\Index(name="Id_Superviseur", columns={"Id_Superviseur"})})
 * @ORM\Entity
 */
class Stage
{
    /**
     * @var int
     *
     * @ORM\Column(name="Id_Stage", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idStage;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Descriptif", type="text", length=65535, nullable=true)
     */
    private $descriptif;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="Date_debut", type="date", nullable=false)
     */
    private $dateDebut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="Date_fin", type="date", nullable=false)
     */
    private $dateFin;

    /**
     * @var \Superviseur
     *
     * @ORM\ManyToOne(targetEntity="Superviseur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Id_Superviseur", referencedColumnName="Id_Superviseur")
     * })
     */
    private $idSuperviseur;

    /**
     * @var \Entreprise
     *
     * @ORM\ManyToOne(targetEntity="Entreprise")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Id_Entreprise", referencedColumnName="Id_Entreprise")
     * })
     */
    private $idEntreprise;

    public function toArray()
    {
        return ['Id_Stage' => $this->idStage, 'Descriptif' => $this->descriptif, 'Date_debut' => $this->dateDebut, 'Date_fin' => $this->dateFin];
    }
    public function setName($name)
    {
        $this->name = '';
    }

}
